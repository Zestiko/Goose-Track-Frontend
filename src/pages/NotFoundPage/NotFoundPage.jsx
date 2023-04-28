import scss  from './NotFoundPage.module.scss'


const NotFoundPage = () => {

    return (<section className={scss.page_404}>
	<div >
		<div>	
            <div >
                <div >
                    <div className={scss.four_zero_four_bg}>
                        <h1 className={`${scss.text} `}>404</h1>
                        </div>
		
		<div className={scss.contant_box_404}>
		<h3 className={scss.info}>
		Look like you're lost
		</h3>
		
		<p  className={scss.info2}>the page you are looking for not avaible!</p>
		
		<a href="/" className={scss.button}>Go to Home</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>)
}

export default NotFoundPage;