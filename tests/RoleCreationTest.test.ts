
// # Define: Class Imports that are required of JEST tests
import { Employee } from "../src/models/Employee";
import { Manager } from "../src/models/Manager";
import { Engineer } from "../src/models/Engineer";
import { Intern } from "../src/models/Intern";


// # Define: Our test suite name 
describe( '[RoleCreationTest] Test creation of each defined role/class:', () => {


    /**
     *  Test Case: Create New Employee
     */
    test('Create new Employee and check functions/parameters', () => {

        // # Define: Employee Details
        let employeeName = "Jane Doe";
        let employeeId = 0;
        let employeeEmail = "jane.doe@test.org";

        // # Create: New Employee
        let testEmployee = new Employee(
            employeeName,
            employeeId,
            employeeEmail
        );

        // # Test: That methods exist for default super class
        expect( typeof testEmployee.getName ).toBe ( 'function' );
        expect( typeof testEmployee.getId ).toBe ( 'function' );
        expect( typeof testEmployee.getEmail ).toBe ( 'function' );
        expect( typeof testEmployee.getRole ).toBe ( 'function' );

        // # Test: Employee Details are correct
        expect( testEmployee.getName() ).toBe ( employeeName );
        expect( testEmployee.getId() ).toBe ( employeeId );
        expect( testEmployee.getEmail() ).toBe ( employeeEmail );
        expect( testEmployee.getRole() ).toBe ( 'Employee' );
    });


    /**
     *  Test Case: Create New Manager
     */
     test('Create new Manager and check functions/parameters', () => {

        // # Define: Employee Details
        let managerName = "John Smith";
        let managerId = 0;
        let managerEmail = "john.smith@test.org";
        let managerOfficeNumber = 22;

        // # Create: New Manager
        let testManager = new Manager(
            managerName,
            managerId,
            managerEmail,
            managerOfficeNumber
        );

        // # Test: Manager constructor

        // # Test: That methods exist for default super class
        expect( typeof testManager.getName ).toBe('function');
        expect( typeof testManager.getId ).toBe('function');
        expect( typeof testManager.getEmail).toBe('function');
        expect( typeof testManager.getRole).toBe('function');

        // # Test: Manager is extended from Employee
        expect ( testManager instanceof Employee );

        // # Test: Employee Details are correct
        expect( testManager.getName() ).toStrictEqual( managerName );
        expect( testManager.getId() ).toStrictEqual( managerId );
        expect( testManager.getEmail() ).toStrictEqual ( managerEmail );
        expect( testManager.getOfficeNumber() ).toStrictEqual ( {
            text: "Office Number",
            value: managerOfficeNumber 
        });
        expect( testManager.getRole() ).toStrictEqual ( 'Manager' );

    });

    /**
     *  Test Case: Create New Engineer
     */
    test('Create new Engineer and check functions/parameters', () => {

        // # Define: Employee Details
        let engineerName = "Bilbo Baggins";
        let engineerId = 0;
        let engineerEmail = "bilbo.baggins@test.org";
        let engineerGithub = "https://github.com/bilbobaggins";

        // # Create: New Engineer
        let testEngineer = new Engineer(
            engineerName,
            engineerId,
            engineerEmail,
            engineerGithub
        );

        // # Test: Engineer constructor

        // # Test: That methods exist for default super class
        expect( typeof testEngineer.getName ).toBe('function');
        expect( typeof testEngineer.getId ).toBe('function');
        expect( typeof testEngineer.getEmail).toBe('function');
        expect( typeof testEngineer.getRole).toBe('function');

        // # Test: Engineer is extended from Employee
        expect ( testEngineer instanceof Employee );

        // # Test: Employee Details are correct
        expect( testEngineer.getName() ).toStrictEqual( engineerName );
        expect( testEngineer.getId() ).toStrictEqual( engineerId );
        expect( testEngineer.getEmail() ).toStrictEqual ( engineerEmail );
        expect( testEngineer.getGithub() ).toStrictEqual ( {
            text: "Github Profile",
            value: engineerGithub 
        });
        expect( testEngineer.getRole() ).toStrictEqual ( 'Engineer' );

    });

    /**
     *  Test Case: Create New Intern
     */
    test('Create new Intern and check functions/parameters', () => {

        // # Define: Employee Details
        let internName = "Bilbo Baggins";
        let internId = 0;
        let internEmail = "bilbo.baggins@test.org";
        let internSchool = "https://github.com/bilbobaggins";

        // # Create: New Intern
        let testIntern = new Intern(
            internName,
            internId,
            internEmail,
            internSchool
        );

        // # Test: Intern constructor

        // # Test: That methods exist for default super class
        expect( typeof testIntern.getName ).toBe('function');
        expect( typeof testIntern.getId ).toBe('function');
        expect( typeof testIntern.getEmail).toBe('function');
        expect( typeof testIntern.getRole).toBe('function');

        // # Test: Intern is extended from Employee
        expect ( testIntern instanceof Employee );

        // # Test: Employee Details are correct
        expect( testIntern.getName() ).toStrictEqual( internName );
        expect( testIntern.getId() ).toStrictEqual( internId );
        expect( testIntern.getEmail() ).toStrictEqual ( internEmail );
        expect( testIntern.getSchool() ).toStrictEqual ( {
            text: "School Name",
            value: internSchool 
        });
        expect( testIntern.getRole() ).toStrictEqual ( 'Intern' );

    });

});