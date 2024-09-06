'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming the path for ShadCN's Button component
import { Card } from '@/components/ui/card'; // Assuming the path for ShadCN's Card component

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [memory, setMemory] = useState<number>(0);

  //   const handleNumberClick = (num: string) => {
  //     if (operator) {
  //       setNum2(num2 + num);
  //     } else {
  //       setNum1(num1 + num);
  //     }
  //     setDisplay(display + num);
  //   };
  const handleNumberClick = (num: string) => {
    if (num === '.') {
      // Check if the current number already contains a decimal
      if (operator) {
        if (!num2.includes('.')) {
          setNum2(num2 + num);
          setDisplay(display + num);
        }
      } else {
        if (!num1.includes('.')) {
          setNum1(num1 + num);
          setDisplay(display + num);
        }
      }
    } else {
      // Handle regular number input
      if (operator) {
        setNum2(num2 + num);
      } else {
        setNum1(num1 + num);
      }
      setDisplay(display + num);
    }
  };
  const handleOperatorClick = (op: string) => {
    setOperator(op);
    setDisplay(display + op);
  };

  const handleEqualsClick = () => {
    let result: number;
    switch (operator) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      case '%':
        result = parseFloat(num1) % parseFloat(num2);
        break;
      default:
        result = 0;
    }
    setDisplay(result.toString());
    setNum1(result.toString());
    setNum2('');
    setOperator('');
  };

  const handleClearClick = () => {
    setDisplay('');
    setNum1('');
    setNum2('');
    setOperator('');
  };

  const handleCancelClick = () => {
    if (num2) {
      setNum2(num2.slice(0, -1));
      setDisplay(display.slice(0, -1));
    } else if (operator) {
      setOperator('');
      setDisplay(display.slice(0, -1));
    } else if (num1) {
      setNum1(num1.slice(0, -1));
      setDisplay(display.slice(0, -1));
    }
  };

  const handleSquareRootClick = () => {
    const result = Math.sqrt(parseFloat(display));
    setDisplay(result.toString());
    setNum1(result.toString());
    setNum2('');
    setOperator('');
  };

  const handleSquareClick = () => {
    const result = Math.pow(parseFloat(display), 2);
    setDisplay(result.toString());
    setNum1(result.toString());
    setNum2('');
    setOperator('');
  };

  //   const handleReciprocalClick = () => {
  //     const result = 1 / parseFloat(display);
  //     setDisplay(result.toString());
  //     setNum1(result.toString());
  //     setNum2('');
  //     setOperator('');
  //   };

  const handleMemoryClearClick = () => {
    setMemory(0);
  };

  const handleMemoryRecallClick = () => {
    setDisplay(memory.toString());
    if (operator) {
      setNum2(memory.toString());
    } else {
      setNum1(memory.toString());
    }
  };

  const handleMemoryAddClick = () => {
    setMemory(memory + parseFloat(display));
  };

  const handleMemorySubtractClick = () => {
    setMemory(memory - parseFloat(display));
  };

  //   const handlePositiveNegativeClick = () => {
  //     const result = parseFloat(display) * -1;
  //     setDisplay(result.toString());
  //     if (operator) {
  //       setNum2(result.toString());
  //     } else {
  //       setNum1(result.toString());
  //     }
  //   };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900"
      style={{
        background:
          'linear-gradient(135deg, rgb(0,0,0),rgba(0, 0, 0, 0.854), rgb(0,0,0))',
      }}
    >
      <Card
        className="p-5 rounded-lg shadow-lg w-full max-w-sm text-center"
        style={{
          background: 'linear-gradient(135deg, #4e085f, #2f57a7, #4e085f)',
        }}
      >
        <div className="bg-gray-300 text-black py-8 px-5 text-3xl font-semibold rounded-lg mb-4 text-right">
          {display || '0'}
        </div>
        <div className="grid grid-cols-4 gap-3">
          <Button
            className="bg-red-600 text-white py-3 w-full "
            onClick={handleClearClick}
            style={{ borderRadius: '12px' }}
          >
            AC
          </Button>
          <Button
            className="bg-gray-500 text-white py-3 w-full"
            onClick={handleMemoryClearClick}
          >
            MC
          </Button>
          <Button
            className="bg-gray-500 text-white py-3 w-full"
            onClick={handleMemoryRecallClick}
          >
            MR
          </Button>
          <Button
            className="bg-green-500 text-white py-3 w-full"
            onClick={handleSquareClick}
          >
            x²
          </Button>
          <Button
            className="bg-gray-500 text-white py-3 w-full"
            onClick={handleMemoryAddClick}
          >
            M+
          </Button>
          <Button
            className="bg-gray-500 text-white py-3 w-full"
            onClick={handleMemorySubtractClick}
          >
            M-
          </Button>
          <Button
            className="bg-green-500 text-white py-3 w-full"
            onClick={handleSquareRootClick}
          >
            √
          </Button>
          <Button
            className="bg-green-500 text-white py-3 w-full"
            onClick={() => handleOperatorClick('*')}
          >
            *
          </Button>
          <Button
            className="bg-gray-400 text-black py-3 w-full"
            onClick={() => handleNumberClick('7')}
          >
            7
          </Button>
          <Button
            className="bg-gray-400 text-black py-3 w-full"
            onClick={() => handleNumberClick('8')}
          >
            8
          </Button>
          <Button
            className="bg-gray-400 text-black py-3 w-full"
            onClick={() => handleNumberClick('9')}
          >
            9
          </Button>
          <Button
            className="bg-green-500 text-white py-3 w-full"
            onClick={() => handleOperatorClick('-')}
          >
            -
          </Button>
          <Button
            className="bg-gray-400 text-black py-3 w-full"
            onClick={() => handleNumberClick('4')}
          >
            4
          </Button>
          <Button
            className="bg-gray-400 text-black py-3 w-full"
            onClick={() => handleNumberClick('5')}
          >
            5
          </Button>
          <Button
            className="bg-gray-400 text-black py-3 w-full"
            onClick={() => handleNumberClick('6')}
          >
            6
          </Button>
          <Button
            className="bg-green-500 text-white py-3 w-full"
            onClick={() => handleOperatorClick('+')}
          >
            +
          </Button>
          <Button
            className="bg-gray-400 text-black py-3 w-full"
            onClick={() => handleNumberClick('1')}
          >
            1
          </Button>
          <Button
            className="bg-gray-400 text-black py-3 w-full"
            onClick={() => handleNumberClick('2')}
          >
            2
          </Button>
          <Button
            className="bg-gray-400 text-black py-3 w-full"
            onClick={() => handleNumberClick('3')}
          >
            3
          </Button>
          <Button
            className="bg-green-500 text-white py-3 w-full"
            onClick={() => handleOperatorClick('/')}
          >
            /
          </Button>
          <Button
            className="bg-gray-400 text-black py-3 w-full"
            onClick={() => handleNumberClick('0')}
          >
            0
          </Button>
          <Button
            className="bg-gray-400 text-black py-3 w-full"
            onClick={() => handleNumberClick('.')}
          >
            .
          </Button>
          <Button
            className="bg-gray-400 text-black py-3 w-full"
            onClick={handleCancelClick}
          >
            ⌫
          </Button>

          <Button
            className="bg-green-500 text-white py-3 w-full"
            onClick={handleEqualsClick}
          >
            =
          </Button>
          {/* <Button
            className="bg-green-500 text-white py-3 w-full"
            onClick={handleReciprocalClick}
          >
            1/x
          </Button> */}
        </div>
      </Card>
    </div>
  );
};

export default Calculator;
