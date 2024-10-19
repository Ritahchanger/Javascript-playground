const employees = [
  {
    fname: "Lora",
    lname: "Wanjiru",
    income: 8000,
  },
  {
    fname: "Ken",
    lname: "Isaac",
    income: 120000,
  },
  {
    fname: "Caroline",
    lname: "Nyamu",
    income: 128001,
  },
  {
    fname: "Elisha",
    lname: "Gachagua",
    income: 34003,
  },
  {
    fname: "Ronaldo",
    lname: "Calvis",
    income: 340009,
  },
  {
    fname: "Alex",
    lname: "Brian",
    income: 18070,
  },
  {
    fname: "Cynthia",
    lname: "Bryson",
    income: 78000,
  },
];

const employeesName = employees.map(function(employee){

    return `${employee.fname} ${employee.lname}`

})


const fnames = employees.map(

    function(employee){

        return employee.fname;

    }

)

console.log(fnames)

const filteredNames = fnames.filter(

    function(fname){

        return fname.toLowerCase().includes('i');

    }


)

console.log(filteredNames)

const employeesIncomes = employees.map(

    function(employee){

        return employee.income;

    }

)

console.log(employeesIncomes)

const totalIncome = employeesIncomes.reduce((a,b)=>a+b,0)

console.log(totalIncome)


