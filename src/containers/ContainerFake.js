import fakeUserGenerator from '../utils/fakeUserGenerator.js';
class ContainerFake {
	constructor() {}

	// Genero los 5 productos
	getProducts(qty) {
		const products = [];
		for (let i = 0; i <= qty; i++) {
			products.push(fakeUserGenerator());
		}
		return products;
	}
}

export default ContainerFake;