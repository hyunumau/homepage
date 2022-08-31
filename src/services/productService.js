import { fetchAPI } from "../components/FetchAPI";

const fetchProduct = (data = {}) => {
    const query = new URLSearchParams(data)
    return fetchAPI("http://localhost/api/articles?" + query)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(error.message)
        })
}

const fetchProductDetail = (paramId) => {
    return fetchAPI("http://localhost/api/articles/" + paramId)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(error.message)
        })

}

const fetchCategories = () => {
    return fetchAPI("http://localhost/api/categories/")
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(error.message)
        })
}

const fetchTags = () => {
    return fetchAPI("http://localhost/api/tags/")
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(error.message)
        })
}

const fetchGetArticleByTags = (paramId) => {
    return fetchAPI("http://localhost/api/tags/" + paramId)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(error.message)
        })
}

const fetchGetArticleByCategories = (paramId) => {
    return fetchAPI("http://localhost/api/categories/" + paramId)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(error.message)
        })
}

export { fetchProduct, fetchProductDetail, fetchCategories, fetchTags, fetchGetArticleByTags, fetchGetArticleByCategories }