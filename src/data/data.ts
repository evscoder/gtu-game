import {FriendsItemProps, RatingProps} from "../types/types";

const friends: FriendsItemProps[] = [
    {
        add: true,
        icon: true
    }, {
        icon: true
    }, {
        icon: true
    }, {
        icon: true
    }, {
        icon: true
    }, {
        icon: true
    }, {
        icon: true
    },
    {
        icon: false
    },
    {
        icon: false
    },
    {
        icon: false
    }
];

const rating: RatingProps[] = [
    {
        id: 123,
        name: 'Владимир',
        lastName: 'Ларионов',
        img: '/img/male.png',
        points: 463
    },
    {
        id: 9,
        name: 'Владимир',
        lastName: 'Сергеев',
        img: '/img/male.png',
        points: 521,
        friend: true
    },
    {
        id: 231,
        name: 'Вениамин',
        lastName: 'Васильев',
        img: '/img/male.png',
        points: 865
    },
    {
        id: 321,
        name: 'Мария',
        lastName: 'Логинова',
        img: './female.png',
        points: 865
    },
    {
        id: 492,
        name: 'Борис',
        lastName: 'Казанцев',
        img: '/img/male.png',
        points: 784
    },
    {
        id: 452,
        name: 'Полина',
        lastName: 'Калинина',
        img: './female.png',
        points: 225
    },
    {
        id: 796,
        name: 'Даниил',
        lastName: 'Воробьёв',
        img: '/img/male.png',
        points: 642
    },
    {
        id: 4,
        name: 'Эрик',
        lastName: 'Аксёнов',
        img: '/img/male.png',
        points: 150,
        friend: true
    },
    {
        id: 1155,
        name: 'Иван',
        lastName: 'Иванов',
        img: '/img/male.png',
        points: 100
    },
    {
        id: 12145,
        name: 'Артем',
        lastName: 'Алексеев',
        img: '/img/male.png',
        points: 1000
    }
];

export {
    friends,
    rating
};
