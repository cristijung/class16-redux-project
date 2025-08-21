// este é o store e a sua config é praticamente uma receita padronizada
// importação do 'configureStore' q é uma função simplifica o processo, combinando várias etapas em uma só.
// depois vem as importações dos 'reducers', q nada mais é q o código responsável por atualizar os estados dos
// componentes

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../components/counter/CounterSlice';

// aqui criamos a store do Redux e a store é como um 'bd' central q aramazena todo o estado
// da aplicação.// reducer é um objeto q define como o estado será dividido
// o 'counter: counterReducer informa ao estado 'counter' --- para o estado 'counter', use o reducer que importamos.

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// definição de tipo para o TS e o TypeScript precisa conhecer a estrutura da store
export type AppStore = typeof store;
export type AppState = ReturnType<AppStore['getState']>;
// 'ReturnType<AppStore['getState']>' cria um tipo que representa o estado completo.
// isso é usado, por exemplo, no 'useSelector' para acessar o estado de forma segura.
// ele "infere" o tipo de todo o estado combinado (ex: { counter: { value: 0 } }).

export type AppDispatch = AppStore['dispatch']; 
// isso é usado no hook 'useDispatch' para garantir que você chame as ações corretamente.
