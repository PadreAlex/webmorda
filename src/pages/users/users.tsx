import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
    SortingState,
    getPaginationRowModel,
} from '@tanstack/react-table';
import { mainColor, selectColor } from '../../const-colors';
import SideBar from '../../sidebar/sidebar';
import PopupClass from '../popup/popup';
import { useEffect, useState } from 'react';
import UsersTable from './tableUsers';
import InnerUsers from '../inner/innerUsers';

type Person = {
    id: number
    name: string
    email: string
    pairs: string[],
    lastSeenOnline: string
}

const mockData = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "johndoe@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 3,
        "name": "Michael Johnson",
        "email": "michaeljohnson@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "email": "emilydavis@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 5,
        "name": "Christopher Brown",
        "email": "christopherbrown@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 6,
        "name": "Jessica Wilson",
        "email": "jessicawilson@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 7,
        "name": "David Martinez",
        "email": "davidmartinez@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 8,
        "name": "Amanda Garcia",
        "email": "amandagarcia@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 9,
        "name": "Joshua Rodriguez",
        "email": "joshuarodriguez@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 10,
        "name": "Sarah Lee",
        "email": "sarahlee@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 11,
        "name": "Daniel Perez",
        "email": "danielperez@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 12,
        "name": "Ashley Thompson",
        "email": "ashleythompson@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 13,
        "name": "Matthew White",
        "email": "matthewwhite@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 14,
        "name": "Brittany Harris",
        "email": "brittanyharris@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 15,
        "name": "Andrew Clark",
        "email": "andrewclark@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 16,
        "name": "Stephanie Lewis",
        "email": "stephanielewis@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 17,
        "name": "Brandon Walker",
        "email": "brandonwalker@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 18,
        "name": "Megan Hall",
        "email": "meganhall@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 19,
        "name": "Jason Allen",
        "email": "jasonallen@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 20,
        "name": "Laura Young",
        "email": "laurayoung@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 21,
        "name": "Brian King",
        "email": "brianking@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 22,
        "name": "Kimberly Scott",
        "email": "kimberlyscott@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 23,
        "name": "Nicholas Green",
        "email": "nicholasgreen@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 24,
        "name": "Amber Baker",
        "email": "amberbaker@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 25,
        "name": "Jonathan Adams",
        "email": "jonathanadams@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 26,
        "name": "Rebecca Campbell",
        "email": "rebeccacampbell@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 27,
        "name": "Anthony Evans",
        "email": "anthonyevans@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    },
    {
        "id": 28,
        "name": "Elizabeth Turner",
        "email": "elizabethturner@example.com",
        "pairs": ["PairA", " ", "PairB", " ", "PairC"],
        "lastSeenOnline": "17:30 17.08.2022"
    }


]

const columnHelper = createColumnHelper<Person>();

const columns = [
    columnHelper.accessor('id', {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.email, {
        id: 'email',
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Email</span>,
    }),
    columnHelper.accessor('pairs', {
        header: () => 'Pairs',
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('lastSeenOnline', {
        header: () => 'Last activity',
        cell: (info) => info.renderValue()
    })
];

export default function Users() {
    const [selectedUser, setSelectedUser] = useState<Person>({
        id: NaN,
        name: "",
        email: "",
        pairs: [],
        lastSeenOnline: ""
    })
    const [sorting, setSorting] = useState<SortingState>([]);

    const [data] = useState(() => [...mockData]);

    useEffect(() => {

    }, [selectedUser])


    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        initialState: {
            pagination: {
                pageSize: 10,
            },
        },
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    });

    return (
        <div id='App' style={{
            display: 'flex',
            backgroundColor: mainColor
        }}>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

            {!selectedUser.id ?
                <UsersTable table={table} selectUser={setSelectedUser} /> :
                <InnerUsers return={setSelectedUser} data={selectedUser as Person} />}
        </div>
    );
}