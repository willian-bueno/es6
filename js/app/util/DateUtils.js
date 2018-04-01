/**
 * Classe utilitária para date
 * @author Willian Bueno
 */
class DateUtils{

    constructor(){
        throw new Error('DateUtils não pode ser instanciada');
    }

    /**
     * recebe String formato yyyy-MM-dd e converte para Data
     * @param {string} data 
     */
    static textToData(textDate){
        if(!(/\d{4}-\d{2}-\d{2}/.test(textDate)))
            throw new Error("Formato invalido, deve ser yyyy-MM-dd");
        return new Date(textDate.replace(/-/g,','));
      }

    /**
     * recebe uma Data e retorna uma string no formato dd/MM/yyyy
     * @param {Date} data 
     */
    static DateToText(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
}