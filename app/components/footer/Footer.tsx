'use client';

import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-red-800 py-10 px-8 md:px-12 lg:px-20 mt-auto text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 mb-8">
                    
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-xl font-bold mb-2">Contato</h4>
                        <p className="text-sm">Rua Exemplo, 123 - Centro</p>
                        <p className="text-sm">Cidade, Estado - CEP 12345-678</p>
                        <p className="mt-2 text-sm">Telefone: (99) 99999-9999</p>
                    </div>

                    
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-xl font-bold mb-2">Navegação</h4>
                        <a href="/politica-de-privacidade" className="hover:underline mb-1">Política de Privacidade</a>
                        <a href="/termos-de-uso" className="hover:underline">Termos de Uso</a>
                    </div>
                    
                   
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-xl font-bold mb-2">Siga-nos</h4>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram className="text-2xl hover:text-gray-300 transition-colors" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook className="text-2xl hover:text-gray-300 transition-colors" />
                            </a>
                        </div>
                    </div>

                    
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-xl font-bold mb-2">Newsletter</h4>
                        <p className="text-sm mb-2">Fique por dentro das novidades!</p>
                        <form className="flex flex-col w-full max-w-xs space-y-2">
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className="w-full p-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400" 
                                aria-label="Endereço de e-mail para newsletter"
                            />
                            <button
                                type="submit"
                                className="w-full p-2 bg-orange-500 rounded-md hover:bg-orange-600 transition-colors font-bold text-white" 
                            >
                                Inscrever-se
                            </button>
                        </form>
                    </div>
                </div>

                
                <div className="border-t border-red-700 pt-4 mt-4">
                    <p className="text-center text-sm">
                        &copy; {new Date().getFullYear()} Cristina Jung. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}