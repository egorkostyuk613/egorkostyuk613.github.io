import {RegisterTarifWrapper, TarriffRoot, TarriffTitle} from "./RegisterTarif.styled";
import {TarifRegister} from "./Tarif";
import {observer} from "mobx-react";

const tarrifsArr = [
  {
    name: 'Бизнес китайский',
    list: ['Специфические термины и выражения для деловой среды', 'Грамматика делового общения', 'Структура и формулы для деловой переписки и переговоров.'],
    price: "10 000"
  },
  {
    name: 'HSK 5-6',
    list: ['Лексика и грамматика для HSK', 'Упражнения на чтение и аудирование', 'Практика по тестам HSK'],
    price: "10 865"
  },
  {
    name: 'Китайский для детей',
    list: ['Интерактивные уроки с играми и песнями.', 'Базовая лексика', 'Простые слова и фразы для детей.', 'Развивающие задания'],
    price: "15 000"
  },
  {
    name: 'Китайский для подростков',
    list: ['Термины и выражения, интересные для молодежи.', 'Грамматика', 'Основы грамматики с примерами из подростковой среды.', 'Темы для обсуждений, интересные подросткам.'],
    price: "20 000"
  },
  {
    name: 'Разговорный китайский',
    list: ['Повседневные фразы и выражения', 'Практика диалогов', 'Симуляции разговоров в различных ситуациях'],
    price: "25 000"
  },
  {
    name: 'Китайский с носителем',
    list: ['Один на один с носителем языка.', 'Коррекция акцента и улучшение произношения.', 'Общение на различные темы с носителем.', 'Культурные аспекты'],
    price: "30 000"
  },
]


export const RegisterTarif = observer(() => {
  return <RegisterTarifWrapper>
    <TarriffTitle>
      Выбрать Тариф
    </TarriffTitle>
    <TarriffRoot>
      {tarrifsArr.map((tarif) =>(<TarifRegister name={tarif.name} list={tarif.list} price={tarif.price} />))}
    </TarriffRoot>
  </RegisterTarifWrapper>
})