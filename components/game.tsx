const Game = (parentPath: number) => {
  const generateMaze = (rows: number, cols: number): number[][] => {
    const maze: number[][] = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 0)
    );
    const generatePath = (row: number, col: number) => {
      maze[row][col] = 1;
      const directions = [
        [0, 2],
        [2, 0],
        [0, -2],
        [-2, 0],
      ];

      directions.sort(() => Math.random() - 0.5);

      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          maze[newRow][newCol] === 0
        ) {
          const midRow = row + dx / 2;
          const midCol = col + dy / 2;
          maze[midRow][midCol] = 1;
          generatePath(newRow, newCol);
        }
      }
    };
    generatePath(0, 0);
    return maze;
  };

  const rows = 16;
  const cols = 32;
  const maze = generateMaze(rows, cols);

  const paths = [
    {
      name: "path 1",
      start: [3, 0],
      movements: [
        [
          [3, 1],
          [3, 2],
          [3, 3],
          [2, 3],
          [2, 4],
          [2, 5],
          [3, 5],
          [3, 6],
          [3, 7],
          [4, 7],
          [4, 8],
          [4, 9],
          [5, 9],
          [5, 10],
          [5, 11],
          [6, 11],
          [6, 12],
          [6, 13],
          [7, 13],
          [7, 14],
          [7, 15],
          [8, 15],
          [8, 16],
          [8, 17],
          [7, 17],
          [7, 18],
          [7, 19],
          [6, 19],
          [6, 20],
          [6, 21],
          [7, 21],
          [7, 22],
          [7, 23],
          [6, 23],
          [6, 24],
          [6, 25],
          [5, 25],
          [5, 26],
          [5, 27],
          [4, 27],
          [4, 28],
          [4, 29],
          [3, 29],
          [3, 30],
          [3, 31],
        ],
        [
          [3, 1],
          [3, 2],
          [3, 3],
          [4, 3],
          [4, 4],
          [4, 5],
          [5, 5],
          [5, 6],
          [5, 7],
          [6, 7],
          [6, 8],
          [6, 9],
          [7, 9],
          [7, 10],
          [7, 11],
          [6, 11],
          [6, 12],
          [6, 13],
          [5, 13],
          [5, 14],
          [5, 15],
          [4, 15],
          [4, 16],
          [4, 17],
          [5, 17],
          [5, 18],
          [5, 19],
          [6, 19],
          [6, 20],
          [6, 21],
          [7, 21],
          [7, 22],
          [7, 23],
          [8, 23],
          [8, 24],
          [8, 25],
          [7, 25],
          [7, 26],
          [7, 27],
          [6, 27],
          [6, 28],
          [6, 29],
          [6, 29],
          [6, 30],
          [6, 31],
        ],
        [
          [3, 1],
          [3, 2],
          [3, 3],
          [4, 3],
          [4, 4],
          [4, 5],
          [5, 5],
          [5, 6],
          [5, 7],
          [6, 7],
          [6, 8],
          [6, 9],
          [5, 9],
          [5, 10],
          [5, 11],
          [6, 11],
          [6, 12],
          [6, 13],
          [7, 13],
          [7, 14],
          [7, 15],
          [8, 15],
          [8, 16],
          [8, 17],
          [9, 17],
          [9, 18],
          [9, 19],
          [8, 19],
          [8, 20],
          [8, 21],
          [7, 21],
          [7, 22],
          [7, 23],
          [6, 23],
          [6, 24],
          [6, 25],
          [7, 25],
          [7, 26],
          [7, 27],
          [8, 27],
          [8, 28],
          [8, 29],
          [9, 29],
          [9, 30],
          [9, 31],
        ],
        [
          [3, 1],
          [3, 2],
          [3, 3],
          [4, 3],
          [4, 4],
          [4, 5],
          [5, 5],
          [5, 6],
          [5, 7],
          [6, 7],
          [6, 8],
          [6, 9],
          [7, 9],
          [7, 10],
          [7, 11],
          [8, 11],
          [8, 12],
          [8, 13],
          [9, 13],
          [9, 14],
          [9, 15],
          [10, 15],
          [10, 16],
          [10, 17],
          [9, 17],
          [9, 18],
          [9, 19],
          [10, 19],
          [10, 20],
          [10, 21],
          [11, 21],
          [11, 22],
          [11, 23],
          [12, 23],
          [12, 24],
          [12, 25],
          [13, 25],
          [13, 26],
          [13, 27],
          [12, 27],
          [12, 28],
          [12, 29],
          [12, 29],
          [12, 30],
          [12, 31],
        ],
      ],
    },
    {
      name: "path 2",
      start: [6, 0],
      movements: [
        [
          [6, 1],
          [6, 2],
          [6, 3],
          [7, 3],
          [7, 4],
          [7, 5],
          [8, 5],
          [8, 6],
          [8, 7],
          [7, 7],
          [7, 8],
          [7, 9],
          [6, 9],
          [6, 10],
          [6, 11],
          [7, 11],
          [7, 12],
          [7, 13],
          [6, 13],
          [6, 14],
          [6, 15],
          [5, 15],
          [5, 16],
          [5, 17],
          [4, 17],
          [4, 18],
          [4, 19],
          [5, 19],
          [5, 20],
          [5, 21],
          [4, 21],
          [4, 22],
          [4, 23],
          [5, 23],
          [5, 24],
          [5, 25],
          [4, 25],
          [4, 26],
          [4, 27],
          [3, 27],
          [3, 28],
          [3, 29],
          [3, 29],
          [3, 30],
          [3, 31],
        ],
        [
          [6, 1],
          [6, 2],
          [6, 3],
          [5, 3],
          [5, 4],
          [5, 5],
          [4, 5],
          [4, 6],
          [4, 7],
          [5, 7],
          [5, 8],
          [5, 9],
          [6, 9],
          [6, 10],
          [6, 11],
          [5, 11],
          [5, 12],
          [5, 13],
          [6, 13],
          [6, 14],
          [6, 15],
          [7, 15],
          [7, 16],
          [7, 17],
          [8, 17],
          [8, 18],
          [8, 19],
          [9, 19],
          [9, 20],
          [9, 21],
          [10, 21],
          [10, 22],
          [10, 23],
          [9, 23],
          [9, 24],
          [9, 25],
          [8, 25],
          [8, 26],
          [8, 27],
          [7, 27],
          [7, 28],
          [7, 29],
          [6, 29],
          [6, 30],
          [6, 31],
        ],
        [
          [6, 1],
          [6, 2],
          [6, 3],
          [5, 3],
          [5, 4],
          [5, 5],
          [4, 5],
          [4, 6],
          [4, 7],
          [3, 7],
          [3, 8],
          [3, 9],
          [4, 9],
          [4, 10],
          [4, 11],
          [5, 11],
          [5, 12],
          [5, 13],
          [6, 13],
          [6, 14],
          [6, 15],
          [7, 15],
          [7, 16],
          [7, 17],
          [6, 17],
          [6, 18],
          [6, 19],
          [7, 19],
          [7, 20],
          [7, 21],
          [8, 21],
          [8, 22],
          [8, 23],
          [9, 23],
          [9, 24],
          [9, 25],
          [10, 25],
          [10, 26],
          [10, 27],
          [9, 27],
          [9, 28],
          [9, 29],
          [9, 29],
          [9, 30],
          [9, 31],
        ],
        [
          [6, 1],
          [6, 2],
          [6, 3],
          [7, 3],
          [7, 4],
          [7, 5],
          [8, 5],
          [8, 6],
          [8, 7],
          [7, 7],
          [7, 8],
          [7, 9],
          [8, 9],
          [8, 10],
          [8, 11],
          [9, 11],
          [9, 12],
          [9, 13],
          [10, 13],
          [10, 14],
          [10, 15],
          [9, 15],
          [9, 16],
          [9, 17],
          [10, 17],
          [10, 18],
          [10, 19],
          [11, 19],
          [11, 20],
          [11, 21],
          [12, 21],
          [12, 22],
          [12, 23],
          [11, 23],
          [11, 24],
          [11, 25],
          [12, 25],
          [12, 26],
          [12, 27],
          [11, 27],
          [11, 28],
          [11, 29],
          [12, 29],
          [12, 30],
          [12, 31],
        ],
      ],
    },
    {
      name: "path 3",
      start: [9, 0],
      movements: [
        [
          [9, 1],
          [9, 2],
          [9, 3],
          [10, 3],
          [10, 4],
          [10, 5],
          [11, 5],
          [11, 6],
          [11, 7],
          [10, 7],
          [10, 8],
          [10, 9],
          [11, 9],
          [11, 10],
          [11, 11],
          [10, 11],
          [10, 12],
          [10, 13],
          [9, 13],
          [9, 14],
          [9, 15],
          [8, 15],
          [8, 16],
          [8, 17],
          [9, 17],
          [9, 18],
          [9, 19],
          [8, 19],
          [8, 20],
          [8, 21],
          [7, 21],
          [7, 22],
          [7, 23],
          [6, 23],
          [6, 24],
          [6, 25],
          [5, 25],
          [5, 26],
          [5, 27],
          [4, 27],
          [4, 28],
          [4, 29],
          [3, 29],
          [3, 30],
          [3, 31],
        ],
        [
          [9, 1],
          [9, 2],
          [9, 3],
          [10, 3],
          [10, 4],
          [10, 5],
          [11, 5],
          [11, 6],
          [11, 7],
          [10, 7],
          [10, 8],
          [10, 9],
          [9, 9],
          [9, 10],
          [9, 11],
          [10, 11],
          [10, 12],
          [10, 13],
          [11, 13],
          [11, 14],
          [11, 15],
          [12, 15],
          [12, 16],
          [12, 17],
          [11, 17],
          [11, 18],
          [11, 19],
          [10, 19],
          [10, 20],
          [10, 21],
          [9, 21],
          [9, 22],
          [9, 23],
          [8, 23],
          [8, 24],
          [8, 25],
          [7, 25],
          [7, 26],
          [7, 27],
          [6, 27],
          [6, 28],
          [6, 29],
          [6, 29],
          [6, 30],
          [6, 31],
        ],
        [
          [9, 1],
          [9, 2],
          [9, 3],
          [8, 3],
          [8, 4],
          [8, 5],
          [7, 5],
          [7, 6],
          [7, 7],
          [8, 7],
          [8, 8],
          [8, 9],
          [9, 9],
          [9, 10],
          [9, 11],
          [10, 11],
          [10, 12],
          [10, 13],
          [11, 13],
          [11, 14],
          [11, 15],
          [12, 15],
          [12, 16],
          [12, 17],
          [11, 17],
          [11, 18],
          [11, 19],
          [10, 19],
          [10, 20],
          [10, 21],
          [9, 21],
          [9, 22],
          [9, 23],
          [8, 23],
          [8, 24],
          [8, 25],
          [9, 25],
          [9, 26],
          [9, 27],
          [10, 27],
          [10, 28],
          [10, 29],
          [9, 29],
          [9, 30],
          [9, 31],
        ],
        [
          [9, 1],
          [9, 2],
          [9, 3],
          [10, 3],
          [10, 4],
          [10, 5],
          [11, 5],
          [11, 6],
          [11, 7],
          [12, 7],
          [12, 8],
          [12, 9],
          [11, 9],
          [11, 10],
          [11, 11],
          [12, 11],
          [12, 12],
          [12, 13],
          [13, 13],
          [13, 14],
          [13, 15],
          [14, 15],
          [14, 16],
          [14, 17],
          [13, 17],
          [13, 18],
          [13, 19],
          [12, 19],
          [12, 20],
          [12, 21],
          [11, 21],
          [11, 22],
          [11, 23],
          [12, 23],
          [12, 24],
          [12, 25],
          [11, 25],
          [11, 26],
          [11, 27],
          [12, 27],
          [12, 28],
          [12, 29],
          [12, 29],
          [12, 30],
          [12, 31],
        ],
      ],
    },
    {
      name: "path 4",
      start: [12, 0],
      movements: [
        [
          [12, 1],
          [12, 2],
          [12, 3],
          [11, 3],
          [11, 4],
          [11, 5],
          [10, 5],
          [10, 6],
          [10, 7],
          [11, 7],
          [11, 8],
          [11, 9],
          [10, 9],
          [10, 10],
          [10, 11],
          [9, 11],
          [9, 12],
          [9, 13],
          [8, 13],
          [8, 14],
          [8, 15],
          [9, 15],
          [9, 16],
          [9, 17],
          [8, 17],
          [8, 18],
          [8, 19],
          [7, 19],
          [7, 20],
          [7, 21],
          [6, 21],
          [6, 22],
          [6, 23],
          [5, 23],
          [5, 24],
          [5, 25],
          [4, 25],
          [4, 26],
          [4, 27],
          [3, 27],
          [3, 28],
          [3, 29],
          [3, 29],
          [3, 30],
          [3, 31],
        ],
        [
          [12, 1],
          [12, 2],
          [12, 3],
          [13, 3],
          [13, 4],
          [13, 5],
          [14, 5],
          [14, 6],
          [14, 7],
          [13, 7],
          [13, 8],
          [13, 9],
          [12, 9],
          [12, 10],
          [12, 11],
          [11, 11],
          [11, 12],
          [11, 13],
          [12, 13],
          [12, 14],
          [12, 15],
          [11, 15],
          [11, 16],
          [11, 17],
          [10, 17],
          [10, 18],
          [10, 19],
          [9, 19],
          [9, 20],
          [9, 21],
          [8, 21],
          [8, 22],
          [8, 23],
          [7, 23],
          [7, 24],
          [7, 25],
          [8, 25],
          [8, 26],
          [8, 27],
          [7, 27],
          [7, 28],
          [7, 29],
          [6, 29],
          [6, 30],
          [6, 31],
        ],
        [
          [12, 1],
          [12, 2],
          [12, 3],
          [11, 3],
          [11, 4],
          [11, 5],
          [10, 5],
          [10, 6],
          [10, 7],
          [11, 7],
          [11, 8],
          [11, 9],
          [12, 9],
          [12, 10],
          [12, 11],
          [11, 11],
          [11, 12],
          [11, 13],
          [12, 13],
          [12, 14],
          [12, 15],
          [13, 15],
          [13, 16],
          [13, 17],
          [14, 17],
          [14, 18],
          [14, 19],
          [13, 19],
          [13, 20],
          [13, 21],
          [12, 21],
          [12, 22],
          [12, 23],
          [11, 23],
          [11, 24],
          [11, 25],
          [10, 25],
          [10, 26],
          [10, 27],
          [9, 27],
          [9, 28],
          [9, 29],
          [9, 29],
          [9, 30],
          [9, 31],
        ],
        [
          [12, 1],
          [12, 2],
          [12, 3],
          [11, 3],
          [11, 4],
          [11, 5],
          [10, 5],
          [10, 6],
          [10, 7],
          [11, 7],
          [11, 8],
          [11, 9],
          [10, 9],
          [10, 10],
          [10, 11],
          [9, 11],
          [9, 12],
          [9, 13],
          [8, 13],
          [8, 14],
          [8, 15],
          [9, 15],
          [9, 16],
          [9, 17],
          [10, 17],
          [10, 18],
          [10, 19],
          [11, 19],
          [11, 20],
          [11, 21],
          [12, 21],
          [12, 22],
          [12, 23],
          [13, 23],
          [13, 24],
          [13, 25],
          [14, 25],
          [14, 26],
          [14, 27],
          [13, 27],
          [13, 28],
          [13, 29],
          [12, 29],
          [12, 30],
          [12, 31],
        ],
      ],
    },
  ];
  let demaze: string | any[];
  const chooseExit = Math.floor(Math.random() * 4);
  const finalMaze = (maze: number[][]) => {
    for (let i = 0; i < rows; i++) {
      if (i == 3 || i == 6 || i === 9 || i == 12) {
        maze[i][0] = 1;
        maze[i][31] = 1;
        maze[i][1] = 1;
        maze[i][30] = 1;
      } else {
        maze[i][0] = 0;
        maze[i][31] = 0;
        maze[i][1] = 0;
        maze[i][30] = 0;
      }
    }
    maze[15] = maze[1];
    demaze = paths[parentPath - 1].movements[chooseExit];

    let random = Math.floor(Math.random() * 2);
    for (let i = 0; i < demaze.length; i++) {
      maze[demaze[i][0]][demaze[i][1]] = 1;
      if (maze[demaze[i][0] + 1][demaze[i][1]] == 1) {
        // maze[demaze[i][0] + 1][demaze[i][1]] = 0;
      } else if (maze[demaze[i][0] - 1][demaze[i][1]] == 1) {
        // maze[demaze[i][0] - 1][demaze[i][1]] = 0;
      }
    }

    return maze;
  };

  // -------------------------------------------------------------------------------------
  return (
    <div className="flex flex-col items-center opacity-30 ">
      {finalMaze(maze).map((row: any[], rowIndex) => (
        <div key={rowIndex} className="flex ">
          {row.map((cell: number, colIndex) => (
            <div key={colIndex} className="w-12 group relative h-12">
              <div
                className={` ${
                  (rowIndex == 3 && colIndex == 0) ||
                  (rowIndex == 6 && colIndex == 0) ||
                  (rowIndex == 9 && colIndex == 0) ||
                  (rowIndex == 12 && colIndex == 0)
                    ? "bg-green-700 scale-125 absolute rounded-full z-10"
                    : (rowIndex == 3 && colIndex == 31) ||
                      (rowIndex == 6 && colIndex == 31) ||
                      (rowIndex == 9 && colIndex == 31) ||
                      (rowIndex == 12 && colIndex == 31)
                    ? "bg-red-700 rounded-full scale-125"
                    : cell === 1
                    ? "bg-purple-300 rounded-xl"
                    : "bg-transparent"
                }  h-12 w-12`}
              ></div>
            </div>
          ))}
        </div>
      ))}

      {/* <div>{PlayerMovement(paths[0].movements[chooseExit])}</div> */}
    </div>
  );
};

export default Game;
