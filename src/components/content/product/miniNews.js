function MiniNews({ articleProp }) {

    return (
        articleProp ?
            <div className='fh5co_suceefh5co_height_2'>
                <img style={{ width: '100%', height: "202px" }}
                    src={"https://admin-project-image.s3.ap-southeast-1.amazonaws.com/" + articleProp.image} />
                <div class="fh5co_suceefh5co_height_position_absolute"></div>
                <div class="fh5co_suceefh5co_height_position_absolute_font_2"></div>
                <div>
                    <a className='format-mininews fh5co_good_font_2'
                        href={"/article/" + articleProp.id}
                    >
                        {articleProp.caption}
                    </a>
                </div>
            </div> : null
    )

}
export default MiniNews;