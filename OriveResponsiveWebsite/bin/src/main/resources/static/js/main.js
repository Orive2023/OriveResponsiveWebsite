
// Code for Real time and  date

// function updateTime() {
//     const dateElement = document.getElementById('currentDateTime');
//     const now = new Date();
//     const formattedTime = now.toLocaleString(undefined, {
//         year: 'numeric',
//         month: '2-digit',
//         day: '2-digit',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit'
//     });
//     const dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' });
//     dateElement.innerText = `${formattedTime} (${dayOfWeek})`;
// }

// setInterval(updateTime, 1000); // Update every second (1000 milliseconds)

// Code for menu open and close
        $(function () {
            $(".toggle").on("click", function () {
                if ($(".menu").hasClass("active")) {
                    $(".menu").removeClass("active");
                    $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
                } else {
                    $(".menu").addClass("active");
                    $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
                }
            })
        });