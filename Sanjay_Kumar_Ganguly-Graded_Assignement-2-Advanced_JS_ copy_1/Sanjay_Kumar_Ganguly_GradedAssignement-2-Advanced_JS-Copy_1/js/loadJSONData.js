/**
 * Load the JSON Data 
 */

class LoadJSONData {

    // jsonData = null;

    setfilePath(filePath){
        this.filePath = filePath;
    }

    getJSONData(){
        return this.jsonData;
    }

    loadJSONData(){
        
        fetch( this.filePath )
        .then( response => {
            return response.json();
        })
        .then(jData => {
            this.jsonData = jData;
            console.log("inside loadJSON",this.jsonData);
        })
        
        .catch( (error) => console.log(error.message) );
    }

}

export { LoadJSONData };