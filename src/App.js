import React, { useEffect, useState } from "react";
import "./App.css";
import Item from "./components/Item";
import { useHandle } from "./help";
import Swipe from "react-easy-swipe";

function App() {
  const [grid, setGrid] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const createGrid = () => {
    let newGrid = JSON.parse(JSON.stringify(grid));

    addNum(newGrid);
    addNum(newGrid);
    setGrid(newGrid);
  };

  const addNum = (grid) => {
    let isAdded = false;
    let gridFull = false;
    let count = 0;
    while (!isAdded) {
      if (gridFull) {
        break;
      }
      const a = Math.floor(Math.random() * 4);
      const b = Math.floor(Math.random() * 4);
      count++;
      if (grid[a][b] === 0) {
        const arr = [2, 4];
        grid[a][b] = arr[Math.floor(Math.random() * arr.length)];
        isAdded = true;
      }
      if (count > 80) {
        gridFull = true;
        let over = isGameOver();
        if (over) {
          alert("Game over");
        }
        setGameOver(true);
      }
    }
  };

  const swipeLeft = (flag) => {
    let ogGrid = grid;
    let newGrid = JSON.parse(JSON.stringify(grid));

    for (let i = 0; i < 4; i++) {
      let row = newGrid[i];
      let prev = 0;
      let next = 1;
      while (prev < 4) {
        if (next === 4) {
          next = prev + 1;
          prev++;
          continue;
        }
        if (row[prev] === 0 && row[next] === 0) {
          next++;
        } else if (row[prev] === 0 && row[next] !== 0) {
          row[prev] = row[next];
          row[next] = 0;
          next++;
        } else if (row[prev] !== 0 && row[next] === 0) {
          next++;
        } else {
          if (row[prev] !== row[next]) {
            prev++;
            next = prev + 1;
          } else {
            let points = JSON.parse(JSON.stringify(score));
            if (row[prev] === 2) {
              points += 4;
            } else if (row[prev] === 4) {
              points += 8;
            } else if (row[prev] === 8) {
              points += 16;
            } else if (row[prev] === 16) {
              points += 32;
            } else if (row[prev] === 32) {
              points += 64;
            } else if (row[prev] === 64) {
              points += 128;
            } else if (row[prev] === 128) {
              points += 256;
            } else if (row[prev] === 256) {
              points += 512;
            } else if (row[prev] === 512) {
              points += 1024;
            } else if (row[prev] === 1024) {
              points += 2048;
            }
            setScore(points);
            row[prev] += row[next];
            row[next] = 0;
            next = prev + 1;
            prev++;
          }
        }
      }
    }
    if (JSON.stringify(ogGrid) !== JSON.stringify(newGrid)) {
      addNum(newGrid);
    }
    if (flag) {
      return newGrid;
    } else {
      setGrid(newGrid);
    }
  };

  const swipeRight = (flag) => {
    let ogGrid = grid;
    let newGrid = JSON.parse(JSON.stringify(grid));

    for (let i = 3; i >= 0; i--) {
      let row = newGrid[i];
      let prev = newGrid.length - 1;
      let next = prev - 1;
      while (prev > 0) {
        if (next === -1) {
          next = prev - 1;
          prev--;
          continue;
        }
        if (row[prev] === 0 && row[next] === 0) {
          next--;
        } else if (row[prev] === 0 && row[next] !== 0) {
          row[prev] = row[next];
          row[next] = 0;
          next--;
        } else if (row[prev] !== 0 && row[next] === 0) {
          next--;
        } else {
          if (row[prev] !== row[next]) {
            prev--;
            next = prev - 1;
          } else {
            let points = JSON.parse(JSON.stringify(score));
            if (row[prev] === 2) {
              points += 4;
            } else if (row[prev] === 4) {
              points += 8;
            } else if (row[prev] === 8) {
              points += 16;
            } else if (row[prev] === 16) {
              points += 32;
            } else if (row[prev] === 32) {
              points += 64;
            } else if (row[prev] === 64) {
              points += 128;
            } else if (row[prev] === 128) {
              points += 256;
            } else if (row[prev] === 256) {
              points += 512;
            } else if (row[prev] === 512) {
              points += 1024;
            } else if (row[prev] === 1024) {
              points += 2048;
            }
            setScore(points);
            row[prev] += row[next];
            row[next] = 0;
            next = prev - 1;
            prev--;
          }
        }
      }
    }
    if (JSON.stringify(ogGrid) !== JSON.stringify(newGrid)) {
      addNum(newGrid);
    }
    if (flag) {
      return newGrid;
    } else {
      setGrid(newGrid);
    }
  };

  const swipeUp = (flag) => {
    let ogGrid = grid;
    let newGrid = JSON.parse(JSON.stringify(grid));

    for (let i = 0; i < 4; i++) {
      let prev = 0;
      let next = 1;
      while (prev < 4) {
        if (next === 4) {
          next = prev + 1;
          prev++;
          continue;
        }
        if (newGrid[prev][i] === 0 && newGrid[next][i] === 0) {
          next++;
        } else if (newGrid[prev][i] === 0 && newGrid[next][i] !== 0) {
          newGrid[prev][i] = newGrid[next][i];
          newGrid[next][i] = 0;
          next++;
        } else if (newGrid[prev][i] !== 0 && newGrid[next][i] === 0) {
          next++;
        } else {
          if (newGrid[prev][i] !== newGrid[next][i]) {
            prev++;
            next = prev + 1;
          } else {
            let points = JSON.parse(JSON.stringify(score));
            if (newGrid[prev][i] === 2) {
              points += 4;
            } else if (newGrid[prev][i] === 4) {
              points += 8;
            } else if (newGrid[prev][i] === 8) {
              points += 16;
            } else if (newGrid[prev][i] === 16) {
              points += 32;
            } else if (newGrid[prev][i] === 32) {
              points += 64;
            } else if (newGrid[prev][i] === 64) {
              points += 128;
            } else if (newGrid[prev][i] === 128) {
              points += 256;
            } else if (newGrid[prev][i] === 256) {
              points += 512;
            } else if (newGrid[prev][i] === 512) {
              points += 1024;
            } else if (newGrid[prev][i] === 1024) {
              points += 2048;
            }
            setScore(points);
            newGrid[prev][i] += newGrid[next][i];
            newGrid[next][i] = 0;
            next = prev + 1;
            prev++;
          }
        }
      }
    }
    if (JSON.stringify(ogGrid) !== JSON.stringify(newGrid)) {
      addNum(newGrid);
    }
    if (flag) {
      return newGrid;
    } else {
      setGrid(newGrid);
    }
  };

  const swipeDown = (flag) => {
    let ogGrid = grid;
    let newGrid = JSON.parse(JSON.stringify(grid));

    for (let i = 3; i >= 0; i--) {
      let prev = newGrid.length - 1;
      let next = prev - 1;
      while (prev > 0) {
        if (next === -1) {
          next = prev - 1;
          prev--;
          continue;
        }
        if (newGrid[prev][i] === 0 && newGrid[next][i] === 0) {
          next--;
        } else if (newGrid[prev][i] === 0 && newGrid[next][i] !== 0) {
          newGrid[prev][i] = newGrid[next][i];
          newGrid[next][i] = 0;
          next--;
        } else if (newGrid[prev][i] !== 0 && newGrid[next][i] === 0) {
          next--;
        } else {
          if (newGrid[prev][i] !== newGrid[next][i]) {
            prev--;
            next = prev - 1;
          } else {
            let points = JSON.parse(JSON.stringify(score));
            if (newGrid[prev][i] === 2) {
              points += 4;
            } else if (newGrid[prev][i] === 4) {
              points += 8;
            } else if (newGrid[prev][i] === 8) {
              points += 16;
            } else if (newGrid[prev][i] === 16) {
              points += 32;
            } else if (newGrid[prev][i] === 32) {
              points += 64;
            } else if (newGrid[prev][i] === 64) {
              points += 128;
            } else if (newGrid[prev][i] === 128) {
              points += 256;
            } else if (newGrid[prev][i] === 256) {
              points += 512;
            } else if (newGrid[prev][i] === 512) {
              points += 1024;
            } else if (newGrid[prev][i] === 1024) {
              points += 2048;
            }
            setScore(points);
            newGrid[prev][i] += newGrid[next][i];
            newGrid[next][i] = 0;
            next = prev - 1;
            prev--;
          }
        }
      }
    }
    if (JSON.stringify(ogGrid) !== JSON.stringify(newGrid)) {
      addNum(newGrid);
    }
    if (flag) {
      return newGrid;
    } else {
      setGrid(newGrid);
    }
  };

  useEffect(() => {
    createGrid();
  }, []);

  const handleEvent = (e) => {
    if (gameOver) {
      return;
    }
    switch (e.keyCode) {
      case 37:
        swipeLeft();
        break;
      case 38:
        swipeUp();
        break;
      case 39:
        swipeRight();
        break;
      case 40:
        swipeDown();
        break;
      default:
        break;
    }
    let over = isGameOver();
    if (over) {
      setGameOver(true);
    }
  };

  const isGameOver = () => {
    let checker1 = swipeLeft(true);
    if (JSON.stringify(grid) !== JSON.stringify(checker1)) {
      return false;
    }

    let checker2 = swipeDown(true);
    if (JSON.stringify(grid) !== JSON.stringify(checker2)) {
      return false;
    }

    let checker3 = swipeRight(true);
    if (JSON.stringify(grid) !== JSON.stringify(checker3)) {
      return false;
    }

    let checker4 = swipeUp(true);
    if (JSON.stringify(grid) !== JSON.stringify(checker4)) {
      return false;
    }

    return true;
  };

  const resetGame = () => {
    setGameOver(false);
    const newGrid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    addNum(newGrid);
    addNum(newGrid);
    setGrid(newGrid);
    // window.location.reload()
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
  };

  useHandle("keydown", handleEvent);

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginTop: "auto" }}>
          <button
            style={{
              padding: 10,
              background: "#846F5B",
              color: "#F8F5F0",
              width: 130,
              borderRadius: 7,
              fontWeight: "900",
              marginLeft: "auto",
              marginBottom: "auto",
              cursor: "not-allowed",
            }}
          >
            Score - {score}
          </button>
        </div>
        {gameOver && (
          <div style={{ flex: 1, marginTop: "auto" }}>
            <h1>Game Over!!!</h1>
            <button
              onClick={resetGame}
              style={{
                padding: 10,
                background: "#846F5B",
                color: "#F8F5F0",
                width: 130,
                borderRadius: 7,
                fontWeight: "900",
                marginLeft: "auto",
                marginBottom: "auto",
                cursor: "pointer",
              }}
            >
              Try Again!!
            </button>
          </div>
        )}
        <div style={{ flex: 1, marginTop: "auto" }}>
          <button
            onClick={resetGame}
            style={{
              padding: 10,
              background: "#846F5B",
              color: "#F8F5F0",
              width: 150,
              borderRadius: 7,
              fontWeight: "900",
              marginLeft: "auto",
              marginBottom: "auto",
              cursor: "not-allowed",
            }}
          >
            Best Score - {bestScore}
          </button>
        </div>
      </div>
      <h1
        style={{
          fontFamily: "cursive",
          flex: 1,
          fontWeight: "800",
          fontSize: "90px",
          color: "black",
          marginBottom: "0",
          marginTop: "0",
        }}
      >
        2048 Game
      </h1>
      <div
        style={{
          width: "300px",
          margin: "auto",
          marginTop: "0px",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{ flex: 1, marginTop: "auto" }}>
            <button
              onClick={resetGame}
              style={{
                padding: 10,
                background: "#846F5B",
                color: "#F8F5F0",
                width: 110,
                borderRadius: 7,
                fontWeight: "900",
                marginLeft: "auto",
                marginBottom: "auto",
                cursor: "pointer",
              }}
            >
              New Game
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "lightgray",
          width: "max-content",
          margin: "auto",
          padding: "5px",
          marginTop: "10px",
        }}
      >
        <div style={{}}>
          <Swipe
            onSwipeDown={() => {
              swipeDown();
            }}
            onSwipeUp={() => {
              swipeUp();
            }}
            onSwipeLeft={() => {
              swipeLeft();
            }}
            onSwipeRight={() => {
              swipeRight();
            }}
            style={{ overflowY: "hidden" }}
          >
            {grid.map((row, index) => {
              return (
                <div style={{ display: "flex" }} key={index}>
                  {row.map((num, index) => {
                    return <Item num={num} key={index} />;
                  })}
                </div>
              );
            })}
          </Swipe>
        </div>
      </div>
    </div>
  );
}

export default App;
