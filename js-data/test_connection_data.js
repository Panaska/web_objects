/**
 * This is data for generation testing jobs
 *
 */



var test4= {
    test_type: 'connection',
    imgDir:'./images/', /*путь к папке с картинками для теста*/
    onlyNext: 0, /* 1 - допускает соединение только соседних блоков, 0 - любой вариант */
    noCreatHorizont: 0, /* 1 - запрет соединения горизонтальными линиями */
    noCreatVertical: 1, /* 1 - запрет соединения вертикальными линиями */
    noCreatDiagonal: 0, /* 1 - запрет соединения диагональными линиями */
    job:{
        j1:{
            row: 6,/*количество строк*/
            col: 2,/*количество ячеек в строке*/
            colTitle: { 1:'Direction', 2:'Explanation'},/*Заголовки колонок*/
            jobData:{ /*Данные для генерации задания*/
                1:{/*первая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',/*q - тип данных "вопрос"*/
                        dataText: '',
                        dataImg: {
                            src:'05-l1.png',
                            width:'20%',/* width и height могут принимать любые значения из css. напр.: '25px' or '30%' or 'inherit' etc. */
                            height:''
                        },
                        dataRight: {    /*правильные ответы*/
                            1:{         /*первый правильный ответ*/
                                row: 3, /*в строке 2*/
                                col: 2 /*в ячейке 2*/
                            }
                        }
                    },
                    2:{/*вторая ячейка*/
                        dataType: 'a',/*a - тип данных "ответ"*/
                        dataText: 'Cross the street',
                    }
                },
                2:{/*вторая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',
                        dataText: '',
                        dataImg: {
                            src:'05-l2.png',
                            width:'25%',/* width и height могут принимать любые значения из css. напр.: '25px' or '30%' or 'inherit' etc. */
                            height:''
                        },
                        dataRight: {
                            1:{
                                row: 1,
                                col: 2
                            }
                        }
                    },
                    2:{/*вторая ячейка*/
                        dataType: 'a',
                        dataText: 'Take the first turning on your right',
                    }
                },
                3:{/*вторая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',
                        dataText: '',
                        dataImg: {
                            src:'05-l3.png',
                            width:'25%',/* width и height могут принимать любые значения из css. напр.: '25px' or '30%' or 'inherit' etc. */
                            height:''
                        },
                        dataRight: {
                            1:{
                                row: 2,
                                col: 2
                            }
                        }
                    },
                    2:{/*вторая ячейка*/
                        dataType: 'a',
                        dataText: 'It’s at the corner of',
                    }
                },               
                4:{/*вторая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',
                        dataText: '',
                        dataImg: {
                            src:'05-l6.png',
                            width:'25%',/* width и height могут принимать любые значения из css. напр.: '25px' or '30%' or 'inherit' etc. */
                            height:''
                        },
                        dataRight: {
                            1:{
                                row: 5,
                                col: 2
                            }
                        }
                    },
                    2:{/*вторая ячейка*/
                        dataType: 'a',
                        dataText: 'Go straight on',
                    }
                },
                5:{/*вторая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',
                        dataText: '',
                        dataImg: {
                            src:'05-l7.png',
                            width:'20%',/* width и height могут принимать любые значения из css. напр.: '25px' or '30%' or 'inherit' etc. */
                            height:''
                        },
                        dataRight: {
                            1:{
                                row: 6,
                                col: 2
                            }
                        }
                    },
                    2:{/*вторая ячейка*/
                        dataType: 'a',
                        dataText: 'Take the first turning on your left',
                    }
                },
                6:{/*вторая строка*/
                    1:{/*первая ячейка*/
                        dataType: 'q',
                        dataText: '',
                        dataImg: {
                            src:'05-l8.png',
                            width:'20%',/* width и height могут принимать любые значения из css. напр.: '25px' or '30%' or 'inherit' etc. */
                            height:''
                        },
                        dataRight: {
                            1:{
                                row: 4,
                                col: 2
                            }
                        }
                    },
                    2:{/*вторая ячейка*/
                        dataType: 'a',
                        dataText: 'It’s opposite',
                    }
                }
            }
        }
    }
}


