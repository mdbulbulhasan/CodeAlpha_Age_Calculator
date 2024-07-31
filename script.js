function calculateAge() {
    // Get the input values
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (day && month && year) {
        // Create a new Date object for the birthdate
        const birthDate = new Date(year, month - 1, day);

        // Get today's date
        const today = new Date();

        // Calculate the age
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        // If the birth month hasn't occurred yet this year, or it's the birth month but the birth date hasn't occurred yet, subtract one year from the age
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        // Display the age
        document.getElementById('result').innerText = `You are ${age} years old.`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid date of birth.';
    }
}
