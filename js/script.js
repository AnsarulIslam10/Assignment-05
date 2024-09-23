// reusable function 1 --> calculating donation and calling the history function
function donateNow(inputId, donationCountId, balanceId, titleId) {
    const inputValue = parseFloat(document.getElementById(inputId).value);
    const donationCount = parseFloat(document.getElementById(donationCountId).innerText);
    const balance = parseFloat(document.getElementById(balanceId).innerText);
    if (isNaN(inputValue) || inputValue < 0 || inputValue > balance) {
        alert('Invalid Amount');
        const modal = document.getElementById('my_modal_1');
        modal.close();
        return;
    } else {

        document.getElementById(donationCountId).innerText = donationCount + inputValue;
        document.getElementById(balanceId).innerText = balance - inputValue;
        document.getElementById('my_modal_1').classList.remove('hidden');

        historyCard(inputId, titleId);
    }
}

// reusable function 2 --> history section
function historyCard(inputId, titleId) {
    const inputValue = parseFloat(document.getElementById(inputId).value);
    const title = document.getElementById(titleId).innerText;

    const historyList = document.getElementById('history-list');
    historyList.innerHTML += `
    <div class="p-8 border border-gray-200 rounded-3xl mb-3">
        <h2 class="text-xl font-bold mb-2">${inputValue} Taka is ${title}</h2>
        <span class="text-secondary">${new Date()}</span>
    </div>   
    `
}

document.getElementById('donateBtn-1').addEventListener('click', function () {
    donateNow('input-1', 'donationCount-1', 'balance', 'title-1');
})

document.getElementById('donateBtn-2').addEventListener('click', function () {
    donateNow('input-2', 'donationCount-2', 'balance', 'title-2');
})

document.getElementById('donateBtn-3').addEventListener('click', function () {
    donateNow('input-3', 'donationCount-3', 'balance', 'title-3');
})

// toggle between donation and history
document.getElementById('historyBtn').addEventListener('click', function () {
    document.getElementById('historyBtn').classList.add('bg-primary');
    document.getElementById('donationBtn').classList.remove('bg-primary');
    document.getElementById('donation-container').classList.add('hidden')
    document.getElementById('history-container').classList.remove('hidden')

})

document.getElementById('donationBtn').addEventListener('click', function () {
    document.getElementById('donationBtn').classList.add('bg-primary');
    document.getElementById('historyBtn').classList.remove('bg-primary');
    document.getElementById('history-container').classList.add('hidden')
    document.getElementById('donation-container').classList.remove('hidden')
})


// page switching function
function goToBlogPage() {
    window.location.href = './blog.html';
}
function goToHomePage() {
    window.location.href = './index.html';
}

