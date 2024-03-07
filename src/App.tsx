import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
	DndContext,
	KeyboardSensor,
	PointerSensor,
	closestCenter,
	useSensor,
	useSensors,
	type DragEndEvent,
} from '@dnd-kit/core'
import { SortableContext, arrayMove, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Trophy } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Item } from './Item'
import { items, type ItemInterface } from './utils'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import arrayShuffle from 'array-shuffle'

export const App = () => {
	const [itemsSorted, setItemsSorted] = useState<ItemInterface[]>(arrayShuffle(items))
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	)
	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event
		if (over && active.id !== over.id) {
			setItemsSorted((items) => {
				const oldIndex = items.findIndex((item) => item.id === active.id)
				const newIndex = items.findIndex((item) => item.id === over.id)
				return arrayMove(items, oldIndex, newIndex)
			})
		}
	}
	const score = useMemo(() => {
		let result = 0
		for (let i = 0; i < itemsSorted.length; i++) {
			result += Math.abs(itemsSorted[i].point - i - 1)
		}
		return result
	}, [itemsSorted])
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="max-w-[600px] container mx-auto flex flex-col py-8 gap-y-8">
				<div className="flex items-center">
					<h1 className="font-bold text-2xl">Perdu dans le desert</h1>
					<div className="ml-auto">
						<ModeToggle />
					</div>
				</div>
				<div className="flex flex-col gap-y-2">
					<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
						<SortableContext items={itemsSorted} strategy={verticalListSortingStrategy}>
							{itemsSorted.map((item, index) => (
								<Item key={item.id} item={item} index={index} />
							))}
						</SortableContext>
					</DndContext>
				</div>
				<Dialog>
					<DialogTrigger>
						<Button className="font-bold">Calculer</Button>
					</DialogTrigger>
					<DialogContent className="flex px-4 py-8 flex-col gap-y-8 items-center justify-center w-[300px]">
						<Trophy size={48} />
						<span className="font-medium">Votre score</span>
						<span className="font-bold text-3xl">{score}</span>
					</DialogContent>
				</Dialog>
			</div>
		</ThemeProvider>
	)
}
