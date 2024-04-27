import inquirer from "inquirer";
import chalk from "chalk";
let i = 0;
let noOfStudents = await inquirer.prompt([
    {
        message: "Enter the number of students u want to Enroll",
        name: "x",
        type: "number"
    }
]);
while (i < noOfStudents.x) {
    const fee = 50;
    //--------------------------------------> FOR NAME
    let newStudent = await inquirer.prompt([
        {
            name: "studentName",
            type: "input",
            message: "Enter Student Name"
        }
    ]);
    const Name = newStudent.studentName;
    //--------------------------------------->  FOR STUDENT ID NUMBER
    let studentIDe = Math.floor(Math.random() * 9 + 1);
    let studentIDd = Math.floor(Math.random() * 9 + 1);
    let studentIDc = Math.floor(Math.random() * 9 + 1);
    let studentIDb = Math.floor(Math.random() * 9 + 1);
    let studentIDa = Math.floor(Math.random() * 9 + 1);
    const studentID1 = (`${studentIDa}${studentIDb}${studentIDc}${studentIDd}${studentIDe}`);
    console.log(chalk.bgBlue.white(`Welcome ${Name} Your studentID = ${studentID1}`));
    //-------------------------------------> FOR COURSES
    let courses = await inquirer.prompt([
        {
            name: "Courses",
            type: "list",
            message: "Choose the course you wanna enroll in",
            choices: ["Drop-Shipping", "Cryptography", "Copy Writing", "FreeLancing", "E-Commerce", "Amazon FBA"]
        }
    ]);
    if (courses.Courses === "Cryptography" || "Drop-Shipping" || "Copy Writing" || "FreeLancing" || "E-Commerce" || "Amazon FBA") {
        // console.log(chalk.bgBlue.white(`Your course fee is ${fee}$`))
    }
    ;
    let operation = await inquirer.prompt([
        {
            name: "Operator",
            message: "Choose the next step",
            type: "list",
            choices: ["View Course Fee", "Pay Tuition FEE", "Show Status"]
        }
    ]);
    let step = operation.Operator;
    let noOFCOURSES = courses.Courses;
    let status = {
        name: Name,
        studentId: studentID1,
        courses_enrolled: noOFCOURSES,
        Amount: fee
    };
    if (step === "View Course Fee") {
        console.log(chalk.bgBlue.white(`Your total balance is ${fee}$`));
        console.log(chalk.bgRed.white(`Name = ${status.name} , StudentID = ${status.studentId} , Courses Enrolled = ${status.courses_enrolled} , Total Fee = ${status.Amount}$ `));
    }
    else if (step === "Show Status") {
        console.log(chalk.bgCyan.black(`Name = ${status.name} , StudentID = ${status.studentId} , Courses Enrolled = ${status.courses_enrolled} , Total Fee = ${status.Amount}$ `));
    }
    else if (step === "Pay Tuition FEE") {
        let payment = await inquirer.prompt([
            {
                name: "Payment",
                message: "Select method of Payment",
                type: "list",
                choices: ["Cash", "Online"]
            }
        ]);
        let x = payment.Payment;
        if (x === "Cash" || "Online") {
            console.log(chalk.bgBlue.white("Fee is paid"));
            console.log(chalk.bgGreen.black(`Name = ${status.name} , StudentID = ${status.studentId} , Courses Enrolled = ${status.courses_enrolled} , Total Fee = ${status.Amount}$ `));
        }
    }
    ;
    console.log(chalk.white("------------------------------------------------------------------------"));
    i++;
}
