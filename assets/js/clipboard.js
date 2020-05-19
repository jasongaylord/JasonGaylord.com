SpaacedOut.ready(function() {

    var copy_elements = document.querySelectorAll("[data-copy-text]");
    var copy_count;

    for (copy_count = 0; copy_count < copy_elements.length; copy_count++) {
        copy_elements.elements[copy_count].addEventListener("click", async(event) => {
            if (!navigator.clipboard) {
                return;
            }

            try {
                var copy_value = copy_elements.elements[copy_count].getAttribute("data-copy-text");
                await navigator.clipboard.writeText(copy_value);

                event.target.dataset.clipboard = copy_value;
                setTimeout(() => {
                delete event.target.dataset.clipboard;
                }, 1500); 
            } catch (error) {
                console.error("copy failed", error);
            }
        });
    }
});