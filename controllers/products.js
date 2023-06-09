const product= require("../models/product" ) ;

const getAllProducts =async (req, res) =>{

    const {company , name ,features , sort ,select} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
    }
    if(features){
        queryObject.features = features;
    }
    if(name){
        queryObject.name = { $regex: name, $options: "i" };
    }

    let apiData = product.find(queryObject);

    if(sort){
        let sortFix = sort.replace(","," ");
        apiData = apiData.sort(sortFix);
    }

    if(select){
        let selectFix = select.replace(","," ");
        apiData = apiData.select(selectFix );
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject)
    const productsData = await apiData;
    res.status(200).json({ productsData ,nbHits : productsData.length})
}

const getAllProductsTesting =async (req, res) =>{
    const myData = await product.find(req.query).sort("name -price");
    res.status(200).json({ myData })
}

module.exports = {getAllProducts, getAllProductsTesting};