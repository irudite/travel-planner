export const selectTravelSize=[
    {
        id: 1,
        title: 'Me, Myself, and I',
        desc: 'Some alone time exploration',
        icon: '✈️',
        people: '1'
    },
    {
        id: 2,
        title: 'Couple',
        desc: 'Spend time with your significant other',
        icon: '💑',
        people: '2'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'Vacation with your family',
        icon: '👪',
        people: '3+'
    }
]

export const selectTravelCost=[
    {
        id: 1,
        title: 'Cheap',
        desc: 'Try to keep prices low',
        icon: '💵',
    },
    {
        id: 2,
        title: 'Rich',
        desc: 'Can go above the assigned budget',
        icon: '💰',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'No limits to budget',
        icon: '🏦',
    }
]

export const AI_PROMPT='Generate Travel Plan for location: {location}, for {totalDays} days for {groupSize} people with a {budget}, give me a hotels options list with hotelname, hotel address, price, hotel image url, geo cooridnates, rating, descriptions, and suggest itinerary with place name, place details, place image url, geo coordinates, ticket pricing, rating, time travel each of the location for {totalDays} days with each day plan with best time to visit, also suggest the same stuff but for restaurants in JSON format'