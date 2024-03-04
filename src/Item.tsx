import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { ItemInterface } from './utils'

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
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			className="border px-4 py-2 font-medium flex items-center justify-center touch-none"
		>
			<span className="text-center">{props.item.name}</span>
		</div>
	)
}
