document.addEventListener('DOMContentLoaded', () => {
    // Function to update the background gradient based on time
    function updateGradient() {
        const now = new Date();
        const hours = now.getHours();

        // Determine which gradient to apply based on the time of day
        let gradient;
        if (hours >= 5 && hours < 11) {
            gradient = 'var(--super-light-gradient)';
        } else if (hours >= 11 && hours < 17) {
            gradient = 'var(--light-gradient)';
        } else if (hours >= 17 && hours < 23) {
            gradient = 'var(--dark-gradient)';
        } else {
            gradient = 'var(--super-dark-gradient)';
        }

        // Update the body's background image
        document.body.style.backgroundImage = gradient;
    }

    // Initial update
    updateGradient();

    // Update the gradient every second
    setInterval(updateGradient, 1000);

    // Event listener for hydration reminders
    document.getElementById('start-reminders').addEventListener('click', function () {
        const goal = parseFloat(document.getElementById('goal').value);
        const interval = parseFloat(document.getElementById('interval').value);
        let currentIntake = 0;

        // Validate goal and interval
        if (isNaN(goal) || goal <= 0) {
            alert("Please enter a valid goal.");
            return;
        }
        if (isNaN(interval) || interval <= 0) {
            alert("Please enter a valid interval.");
            return;
        }

        // Set interval for hydration reminders
        setInterval(function () {
            alert("Time to drink water!");
        }, interval * 60 * 1000);

        // Update progress when user drinks water
        document.body.addEventListener('click', function () {
            currentIntake += 250; // Assume each click is 250ml of water intake
            updateProgress(currentIntake, goal);
        });
    });

    function updateProgress(current, goal) {
        const progressBar = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        
        // Ensure the elements exist before manipulating them
        if (progressBar && progressText) {
            // Calculate progress percentage
            const progressPercent = (current / goal) * 100;
            // Ensure percentage does not exceed 100%
            const clampedPercent = Math.min(progressPercent, 100);
            
            progressBar.style.width = `${clampedPercent}%`;
            progressText.textContent = `${current} / ${goal} ml`;

            // Optional: You can also include a visual or textual indication when the goal is reached
            if (clampedPercent >= 100) {
                progressText.textContent = `Goal Reached! ${current} / ${goal} ml`;
            }
        } else {
            console.error('Progress elements not found.');
        }
    }
});
