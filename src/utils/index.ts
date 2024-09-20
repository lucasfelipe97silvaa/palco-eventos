

const formatCPF = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = numericValue.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2}).*/,
        '$1.$2.$3-$4'
    );
    return formattedValue;
};

const formatTelefone = (value: string) => {
    const numericValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const length = numericValue.length;

    if (length < 11) return numericValue; // Retorna sem formatação se menos de 11 dígitos

    // Formatação para telefone fixo e celular
    if (length === 11) {
        return numericValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // (00) 00000-0000
    } else {
        return numericValue.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3'); // (00) 0000-0000
    }
};

export const utils = {
    formatCPF,
    formatTelefone
}