export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request) { 
    return Response.json([
        {
            key: '1',
            label: 'This is panel header 1',
            children: 'asd',
        },
        {
            key: '2',
            label: 'This is panel header 2',
            children: 'asd',
        },
        {
            key: '3',
            label: 'This is panel header 3',
            children: 'asd',
        },
        {
            key: '4',
            label: 'four',
            children: 'asdasdasd',
        },
    ])
}