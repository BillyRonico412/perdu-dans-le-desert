import { Button } from '@/components/ui/button'
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
import { useState } from 'react'
import { Item } from './Item'
import { items, type ItemInterface } from './utils'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'

export const App = () => {
	const [itemsSorted, setItemsSorted] = useState<ItemInterface[]>(items)
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
	const onClickCalculer = () => {
		let result = 0
		for (let i = 0; i < itemsSorted.length; i++) {
			result += Math.abs(itemsSorted[i].point - i - 1)
		}
		toast.success(`Le score est de ${result}`)
	}
	return (
		<>
			<div className="max-w-[600px] container mx-auto flex flex-col py-8 gap-y-8">
				<h1 className="text-center font-bold text-2xl">Perdu dans le desert</h1>
				<div className="flex flex-col gap-y-2">
					<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
						<SortableContext items={itemsSorted} strategy={verticalListSortingStrategy}>
							{itemsSorted.map((item, index) => (
								<Item key={item.id} item={item} index={index} />
							))}
						</SortableContext>
					</DndContext>
				</div>
				<Button className="font-bold" onClick={onClickCalculer}>
					Calculer
				</Button>
			</div>
			<Toaster closeButton={true} />
		</>
	)
}
