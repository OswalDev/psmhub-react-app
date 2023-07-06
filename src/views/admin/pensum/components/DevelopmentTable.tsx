import React, { useEffect, useState } from "react";
import CardMenu from "../../../../components/card/CardMenu";
// import { db } from "services/firebase.config.ts";
import { DiApple } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { DiWindows } from "react-icons/di";
import Card from "../../../../components/card";
// import Progress from "../../../../components/progress";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

type RowObj = {
  code: string;
  subject: String;
  th: number;
  ph: number;
  lh: number;
  ht: number;
  prelation: Array<string>;
};

function CheckTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor("code", {
      id: "code",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">CÓDIGO</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("subject", {
      id: "subject",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">ASIGNATURA</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("th", {
      id: "th",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">HT</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("ph", {
      id: "ph",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">HP</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("lh", {
      id: "lh",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">HL</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("ht", {
      id: "ht",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">TH</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    // columnHelper.accessor("progress", {
    //   id: "quantity",
    //   header: () => (
    //     <p className="text-sm font-bold text-gray-600 dark:text-white">
    //       PROGRESO
    //     </p>
    //   ),
    //   cell: (info) => (
    //     <div className="flex items-center gap-3">
    //       <p className="text-sm font-bold text-navy-700 dark:text-white">
    //         {info.getValue()}%
    //       </p>
    //       <Progress width="w-[68px]" value={info.getValue()} />
    //     </div>
    //   ),
    // }),
    columnHelper.accessor("prelation", {
      id: "date",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">PRELACIÓN</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    
  ]; // eslint-disable-next-line

  // const [subjects, setSubjects] = useState({})
  // async function fetchFirestoreData(collection: string, documentId: string) {
  //   try {
  //     const docRef = doc(db, collection, documentId);
  //     const docSnap = await getDoc(docRef);    
  //     if (docSnap.exists()) {
  //       const data = docSnap.data();
  //       console.log('Fetched data:', data);
  //       return data;
  //     } else {
  //       console.log('Document does not exist!');
  //       return null;    }
  //   } catch (error) {
  //       console.error('Error fetching Firestore data:', error);
  //       throw error;
  //     }
  // }

  // fetchFirestoreData("subjects", import.meta.env.VITE_FIREBASE_PROJECT_ID)

  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          PENSUM PARA ING. EN SISTEMAS
        </div>

        <CardMenu />
      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows
              .map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[150px] border-white/0 py-3  pr-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default CheckTable;
const columnHelper = createColumnHelper<RowObj>();
