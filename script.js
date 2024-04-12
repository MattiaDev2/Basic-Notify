var zIndexCounter = 1000;

    function showNotification(type, message, duration) {
        var notificationContainer = document.getElementById('notification-container');

        var notification = document.createElement('div');
        notification.classList.add('bg-dark', 'text-white', 'p-3', 'rounded', 'mb-2', 'position-relative', 'd-flex', 'flex-column');
        notification.style.zIndex = zIndexCounter++;

        if (type === 'success') {
            notification.style.borderLeft = '6px solid green';
        } else if (type === 'error') {
            notification.style.borderLeft = '6px solid red';
        } else if (type === 'warning') {
            notification.style.borderLeft = '6px solid yellow';
        } else if (type === 'info') {
            notification.style.borderLeft = '6px solid blue';
        } else if (type === 'system') {
            notification.style.borderLeft = '6px solid gray';
        }

        var notificationRow = document.createElement('div');
        notificationRow.classList.add('row', 'align-items-center', 'flex-grow-1');

        var arrowIconCol = document.createElement('div');
        arrowIconCol.classList.add('col-auto');

        var arrowIcon = document.createElement('span');
        arrowIcon.classList.add('fa', 'fa-lg');
        if (type === 'success') {
            arrowIcon.classList.add('fa-check', 'text-success');
        } else if (type === 'error') {
            arrowIcon.classList.add('fa-triangle-exclamation', 'text-danger');
        } else if (type === 'warning') {
            arrowIcon.classList.add('fa-exclamation-triangle', 'text-warning');
        } else if (type === 'info') {
            arrowIcon.classList.add('fa-info-circle', 'text-info');
        } else if (type === 'system') {
            arrowIcon.classList.add('fa-cogs', 'text-secondary');
        }

        var notificationContentCol = document.createElement('div');
        notificationContentCol.classList.add('col');

        var notificationTitle = document.createElement('div');
        notificationTitle.classList.add('fw-bold'); 

        if (type === 'success') {
            notificationTitle.classList.add('text-success');
        } else if (type === 'error') {
            notificationTitle.classList.add('text-danger');
        } else if (type === 'warning') {
            notificationTitle.classList.add('text-warning');
        } else if (type === 'info') {
            notificationTitle.classList.add('text-info');
        } else if (type === 'system') {
            notificationTitle.classList.add('text-secondary');
        }

        notificationTitle.textContent = type.charAt(0).toUpperCase() + type.slice(1);

        var notificationMessage = document.createElement('div');
        notificationMessage.textContent = message;

        var notificationProgress = document.createElement('div');
        notificationProgress.classList.add('progress', 'mt-2', 'mb-0', 'align-self-start', 'w-100');
        notificationProgress.style.height = '3px';

        var progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressBar.setAttribute('role', 'progressbar');

        if (type === 'success') {
            progressBar.classList.add('bg-success');
        } else if (type === 'error') {
            progressBar.classList.add('bg-danger');
        } else if (type === 'warning') {
            progressBar.classList.add('bg-warning');
        } else if (type === 'info') {
            progressBar.classList.add('bg-info');
        } else if (type === 'system') {
            progressBar.classList.add('bg-secondary');
        }

        notificationProgress.appendChild(progressBar);
        arrowIconCol.appendChild(arrowIcon);
        notificationContentCol.appendChild(notificationTitle);
        notificationContentCol.appendChild(notificationMessage);
        notificationRow.appendChild(arrowIconCol);
        notificationRow.appendChild(notificationContentCol);
        notification.appendChild(notificationRow);
        notification.appendChild(notificationProgress);
        notificationContainer.appendChild(notification);

        setTimeout(function () {
            notificationContainer.removeChild(notification);
        }, duration + 500);

        var startTime = performance.now();

        function animate() {
            var currentTime = performance.now();
            var elapsedTime = currentTime - startTime;
            var progress = Math.min(elapsedTime / duration, 1);

            progressBar.style.width = progress * 100 + '%';
            progressBar.setAttribute('aria-valuenow', progress * 100);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }