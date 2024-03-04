import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { ItemInterface } from './utils'
import { Grip } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface ItemProps {
	item: ItemInterface
	index: number
}

export const Item = (props: ItemProps) => {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.item.id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}
	return (
		<div ref={setNodeRef} style={style} className="border px-4 py-2 font-medium flex gap-x-4 items-center rounded-lg">
			<Grip {...listeners} {...attributes} size={16} className="flex-shrink-0 touch-none" />
			<Badge>{props.index + 1}</Badge>
			<span>{props.item.name}</span>
		</div>
	)
}
