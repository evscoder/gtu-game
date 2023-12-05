export interface FriendsItemProps {
    add?: boolean,
    icon?: boolean
}

export interface RatingProps {
    id: number,
    name: string,
    lastName: string,
    img: string,
    points: number,
    friend?: boolean
}
