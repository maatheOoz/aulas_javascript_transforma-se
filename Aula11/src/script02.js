// Criação de métodos
const casa = {
    portas: 5,
    janelas: 4,
    telhado: true,
    laje: true,
    pets: {
        cachorro: {
            nome: "Bony",
            raca: "Shih Tzu",
            latir: function() {
                return this.nome + " latiu: Au Au";
            }
        },
    }
}

console.log(casa.pets.cachorro.latir());
