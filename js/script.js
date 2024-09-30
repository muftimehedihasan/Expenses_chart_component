document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/data.json')
        .then(response => response.json())
        .then(data => {
            const chart = document.getElementById('chart');
            const today = new Date().toLocaleString('en-us', { weekday: 'short' }).toLowerCase();

            data.spending.forEach(item => {
                const bar = document.createElement('div');
                const height = item.amount * 3; // Bar height calculation
                
                bar.className = `relative w-10 rounded bg-orange-400 ${item.day === today ? 'bg-blue-400' : ''}`;
                bar.style.height = `${height}px`;

                const tooltip = document.createElement('div');
                tooltip.className = "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-black text-white p-1 rounded opacity-0 hover:opacity-100";
                tooltip.innerHTML = `$${item.amount.toFixed(2)}`;

                bar.appendChild(tooltip);
                chart.appendChild(bar);
            });
        })
        .catch(err => console.error('Error loading data:', err));
});
