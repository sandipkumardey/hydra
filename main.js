document.getElementById('start-reminders').addEventListener('click', function () {
    const goal = document.getElementById('goal').value;
    const interval = document.getElementById('interval').value;
    let currentIntake = 0;

    if (goal && interval) {
        // Set interval for hydration reminders
        setInterval(function () {
            alert("Time to drink water!");
        }, interval * 60 * 1000);

        // Update progress when user drinks water
        document.body.addEventListener('click', function () {
            currentIntake += 250; // Assume each click is 250ml of water intake
            updateProgress(currentIntake, goal);
        });
    }
});

function updateProgress(current, goal) {
    const progressBar = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    const progressPercent = (current / goal) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    progressText.textContent = `${current} / ${goal} ml`;
}
