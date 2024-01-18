"use strict";(self.webpackChunkgeekink=self.webpackChunkgeekink||[]).push([[6218],{4850:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(5893),s=r(1151);const i={sidebar_position:4},o="Assignments",a={id:"C/ass",title:"Assignments",description:"Algorithm:",source:"@site/docs/C/ass.mdx",sourceDirName:"C",slug:"/C/ass",permalink:"/docs/C/ass",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Past Questions",permalink:"/docs/C/questions"},next:{title:"DSA",permalink:"/docs/category/dsa"}},l={},c=[{value:"Algorithm:",id:"algorithm",level:2},{value:"Program Flow",id:"program-flow",level:2},{value:"Algorithm",id:"algorithm-1",level:2},{value:"Program Flow:",id:"program-flow-1",level:2},{value:"Code",id:"code",level:2},{value:"Algorithm",id:"algorithm-2",level:2},{value:"Program Flow:",id:"program-flow-2",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"assignments",children:"Assignments"}),"\n",(0,t.jsx)(n.h1,{id:"project-1",children:"project 1"}),"\n",(0,t.jsx)(n.h2,{id:"algorithm",children:"Algorithm:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get User Input:\nDisplay a prompt asking the user to enter the first number.\nRead the user input and store it in the variable num1.\nDisplay a prompt asking the user to enter an operator (+, -, *, /).\nRead the user input and store it in the variable operator with a space before %c to consume any whitespace characters.\nDisplay a prompt asking the user to enter the second number.\nRead the user input and store it in the variable num2."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Perform Arithmetic Operations:\nUse a switch statement to check the entered operator and perform the corresponding arithmetic operation.\nFor addition (+), add num1 and num2.\nFor subtraction (-), subtract num2 from num1.\nFor multiplication (*), multiply num1 and num2.\nFor division (/), check if num2 is not zero, then divide num1 by num2.\nIf num2 is zero, display an error message, and exit the program with an error code.\nFor an invalid operator, display an error message, and exit the program with an error code.\nStore the result in the variable result."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Display Result:\nDisplay the result of the arithmetic operation with two decimal places."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Exit Successfully:\nReturn 0 to indicate successful program execution."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"program-flow",children:"Program Flow"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"User Interaction\nUser is prompted to enter the first number.\nUser enters the first number.\nUser is prompted to enter an operator (+, -, *, /).\nUser enters the operator.\nUser is prompted to enter the second number.\nUser enters the second number."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Arithmetic Operations:\nThe program uses a switch statement to identify the operator and perform the corresponding arithmetic operation.\nIf the operator is invalid or division by zero is attempted, an error message is displayed, and the program exits with an error code.\nOtherwise, the result of the arithmetic operation is calculated and stored in the variable result."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Display Result:\nThe program displays the result of the arithmetic operation with two decimal places."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Exit Successfully:\nThe program exits with a return code of 0, indicating successful execution.\nThis program allows the user to perform basic arithmetic operations on two numbers based on user input. It includes error checking for invalid operators and division by zero."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\n\nint main() {\n    double num1, num2, result;\n    char operator;\n\n    // Get user input\n    printf("Enter first number: ");\n    scanf("%lf", &num1);\n\n    printf("Enter operator (+, -, *, /): ");\n    scanf(" %c", &operator);  // Note the space before %c to consume any whitespace characters\n\n    printf("Enter second number: ");\n    scanf("%lf", &num2);\n\n    // Perform arithmetic operations\n    switch (operator) {\n        case \'+\':\n            result = num1 + num2;\n            break;\n        case \'-\':\n            result = num1 - num2;\n            break;\n        case \'*\':\n            result = num1 * num2;\n            break;\n        case \'/\':\n            if (num2 != 0) {\n                result = num1 / num2;\n            } else {\n                printf("Error: Division by zero is not allowed.\\n");\n                return 1;  // Exit with an error code\n            }\n            break;\n        default:\n            printf("Error: Invalid operator.\\n");\n            return 1;  // Exit with an error code\n    }\n\n    // Display the result\n    printf("Result: %.2lf %c %.2lf = %.2lf\\n", num1, operator, num2, result);\n\n    return 0;  // Exit successfully\n}\n\n'})}),"\n",(0,t.jsx)(n.h1,{id:"project-2",children:"project 2"}),"\n",(0,t.jsx)(n.h2,{id:"algorithm-1",children:"Algorithm"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"step 1 Prompt User for Number of Courses:\nDisplay a prompt asking the user to enter the number of courses.\nRead the user input and store it in the variable numCourses."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"step 2 Validate Number of Courses:\nCheck if numCourses is less than or equal to 0.\nIf true, display an error message and exit the program with an error code."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"step 3 Initialize Variables:\nInitialize totalCredits and totalGradePoints to 0.0."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"step 4  Loop for Each Course:\nUse a for loop to iterate from 1 to numCourses."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"step 5 Inside the loop:\nDisplay a prompt for course details (course number).\nRead and store user input for course credits in the variable credits.\nRead and store user input for course grade in the variable grade."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"step 6 Validate Grade:\nCheck if grade is outside the valid range of 0 to 4 (on a 4.0 scale).\nIf true, display an error message and exit the program with an error code."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"step 7 Update Total Credits and Grade Points:\nAdd credits to totalCredits.\nAdd the product of credits and grade to totalGradePoints."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"step 8  Calculate GPA:\nCalculate the GPA by dividing totalGradePoints by totalCredits. Store the result in the variable gpa."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"step 9 Display GPA:\nDisplay the calculated GPA with two decimal places."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"step 10 Exit Successfully:\nReturn 0 to indicate successful program execution."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"program-flow-1",children:"Program Flow:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"User Interaction:\nUser is prompted to enter the number of courses.\nUser enters the number of courses."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Validation:\nThe program checks if the entered number of courses is valid (greater than 0).\nIf not, an error message is displayed, and the program exits with an error code."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Initialization:\nVariables totalCredits and totalGradePoints are initialized to 0.0."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Loop for Each Course:\nThe program enters a loop to gather information for each course."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"User Interaction for Each Course:\nUser is prompted to enter credits for the current course.\nUser enters credits for the current course.\nUser is prompted to enter the grade for the current course.\nUser enters the grade for the current course."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Grade Validation:\nThe program checks if the entered grade is within the valid range (0 to 4).\nIf not, an error message is displayed, and the program exits with an error code."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Update Total Credits and Grade Points:\nThe program updates the cumulative total credits and grade points for all courses."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Calculate GPA:\nThe program calculates the GPA based on the accumulated total credits and grade points."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Display GPA:\nThe program displays the calculated GPA."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Exit Successfully:\nThe program exits with a return code of 0, indicating successful execution.\nThis program allows a user to input information for multiple courses and calculates the GPA based on the entered data."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\n\ndouble calculateGradePoints(double grade) // function protype\nint main() {\n    int numCourses;\n    printf("Enter the number of courses: ");\n    scanf("%d", &numCourses);\n\n    // Ensure a valid number of courses is entered\n    if (numCourses <= 0) {\n        printf("Error: Please enter a valid number of courses.\\n");\n        return 1;  // Exit with an error code\n    }\n\n    double totalCredits = 0.0;\n    double totalGradePoints = 0.0;\n\n    for (int i = 1; i <= numCourses; ++i) {\n        double credits, grade;\n        printf("\\nEnter details for Course %d:\\n", i);\n\n        // Get user input for course credits\n        printf("Enter credits for Course %d: ", i);\n        scanf("%lf", &credits);\n\n        // Get user input for course grade\n        printf("Enter grade for Course %d: ", i);\n        scanf("%lf", &grade);\n\n        // Validate the grade entered\n        if (grade < 0 || grade > 100) {\n            printf("Error: Please enter a valid grade between 0 and 100.\\n");\n            return 1;  // Exit with an error code\n        }\n\n        // Calculate grade points based on the provided scale\n        double gradePoints = calculateGradePoints(grade);\n\n        // Update total credits and grade points\n        totalCredits += credits;\n        totalGradePoints += credits * gradePoints;\n    }\n\n    // Calculate GPA\n    double gpa = totalGradePoints / totalCredits;\n\n    // Display the GPA\n    printf("\\nYour GPA is: %.2lf\\n", gpa);\n\n    return 0;  // Exit successfully\n}\n// function defination\ndouble calculateGradePoints(double grade) {\n    if (grade >= 70) {\n        return 5.0;\n    } else if (grade >= 60) {\n        return 4.0;\n    } else if (grade >= 50) {\n        return 3.0;\n    } else if (grade >= 45) {\n        return 2.0;\n    } else if (grade >= 40) {\n        return 1.0;\n    } else {\n        return 0.0;\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h1,{id:"project-3",children:"project 3"}),"\n",(0,t.jsx)(n.h2,{id:"algorithm-2",children:"Algorithm"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get User Input:\nDisplay a menu for temperature conversion options.\nPrompt the user to choose between Celsius to Fahrenheit (1) or Fahrenheit to Celsius (2).\nRead the user's choice and store it in the variable choice.\nPrompt the user to enter the temperature for conversion.\nRead the user input for temperature and store it in the variable temperature."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Perform Temperature Conversion:\nUse a switch statement to check the user's choice and perform the corresponding temperature conversion.\nIf the choice is 1, call the celsiusToFahrenheit function and display the result.\nIf the choice is 2, call the fahrenheitToCelsius function and display the result.\nIf the choice is neither 1 nor 2, display an error message and exit the program with an error code."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Display Result:\nDisplay the result of the temperature conversion with two decimal places."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Exit Successfully:\nReturn 0 to indicate successful program execution."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"program-flow-2",children:"Program Flow:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"User Interaction:\nUser is presented with a menu for temperature conversion options.\nUser is prompted to choose between Celsius to Fahrenheit (1) or Fahrenheit to Celsius (2).\nUser enters the choice.\nUser is prompted to enter the temperature for conversion.\nUser enters the temperature."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Temperature Conversion:\nThe program uses a switch statement to identify the user's choice.\nIf the choice is 1, the program calls the celsiusToFahrenheit function, passing the entered temperature, and displays the result.\nIf the choice is 2, the program calls the fahrenheitToCelsius function, passing the entered temperature, and displays the result.\nIf the choice is neither 1 nor 2, an error message is displayed, and the program exits with an error code."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Display Result:\nThe program displays the result of the temperature conversion with two decimal places."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Exit Successfully:\nThe program exits with a return code of 0, indicating successful execution."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\n\n// Function to convert Celsius to Fahrenheit\ndouble celsiusToFahrenheit(double celsius) {\n    return (celsius * 9 / 5) + 32;\n}\n\n// Function to convert Fahrenheit to Celsius\ndouble fahrenheitToCelsius(double fahrenheit) {\n    return (fahrenheit - 32) * 5 / 9;\n}\n\nint main() {\n    int choice;\n    double temperature;\n\n    // Get user\'s choice\n    printf("Choose conversion:\\n");\n    printf("1. Celsius to Fahrenheit\\n");\n    printf("2. Fahrenheit to Celsius\\n");\n    printf("Enter choice (1 or 2): ");\n    scanf("%d", &choice);\n\n    // Get temperature from user\n    printf("Enter temperature: ");\n    scanf("%lf", &temperature);\n\n    // Perform conversion based on user\'s choice\n    switch (choice) {\n        case 1:\n            printf("%.2lf Celsius is equal to %.2lf Fahrenheit\\n", temperature, celsiusToFahrenheit(temperature));\n            break;\n        case 2:\n            printf("%.2lf Fahrenheit is equal to %.2lf Celsius\\n", temperature, fahrenheitToCelsius(temperature));\n            break;\n        default:\n            printf("Error: Invalid choice. Please enter 1 or 2.\\n");\n            return 1;  // Exit with an error code\n    }\n\n    return 0;  // Exit successfully\n}\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(7294);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);