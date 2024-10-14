import {Star, StarHalf} from 'lucide-react'

type Props = {
  rating: number
}

export const StarsRating = ({rating}: Props) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating - fullStars >= 0.5

  return (
    <div className='flex items-center gap-1' data-testid='stars-rating-container'>
      <span className='flex' data-testid='stars-rating'>
        {Array.from({length: fullStars}, (_, i) => i + 1).map(key => {
          return <Star key={key} className='text-yellow-500' fill='#ebb305' size={18} />
        })}
        {hasHalfStar && <StarHalf className='text-yellow-500' fill='#ebb305' size={18} />}
      </span>
      <span>{rating}</span>
    </div>
  )
}
