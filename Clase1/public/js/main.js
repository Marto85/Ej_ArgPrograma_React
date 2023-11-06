document.addEventListener('DOMContentLoaded', function() {
    const tipoSeguroSelect = document.getElementById('tipoSeguro');
    const valorSeguroInput = document.getElementById('valorSeguro');

    tipoSeguroSelect.addEventListener('change', function() {
        const selectedOption = tipoSeguroSelect.value;
        let valorSeguro = '';

        switch (selectedOption) {
            case 'Basico':
                valorSeguro = '$500';
                break;
            case 'Intermedio':
                valorSeguro = '$1000';
                break;
            case 'Premium':
                valorSeguro = '$1500';
                break;
            default:
                valorSeguro = '';
                break;
        }

        valorSeguroInput.value = valorSeguro;
    });
});
