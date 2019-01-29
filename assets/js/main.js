(($) => {
    $(document).ready(() => {
        const $xhr = $.ajax('assets/ajax/employees.json')
            .done((response) => {
                if (response.success) {
                    response.data.forEach((item, i, arr) => {
                        const $employee = $(
                            `
                            <li class="employee__item">
                            <span class="employee__status"></span>
                            <span class="employee__name"></span>
                            </li>
                            `
                        );
                        $employee.find('.employee__status').addClass(item.status);
                        $employee.find('.employee__status').text(item.status);
                        $employee.find('.employee__name').text(item.name);
                        $employee.appendTo('.employee__list');
                    });
                } else {
                    console.log('Error');
                }
            })
            
    })
})(jQuery)