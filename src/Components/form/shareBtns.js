import React, {useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {
	FacebookShareButton,
	TwitterShareButton,
	VKShareButton,
} from "react-share";
import {
	FacebookIcon,
	TwitterIcon,
	VKIcon,
} from "react-share";


import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr",
		gridTemplateRows: "auto"
	}
}));
const ShareBtn = (props) => {
	const {texts, url} = props;
	const classes = makeStyles()



	return (
		<Grid container direction="row"
					justify="space-between"
					alignItems="center">
			<Grid item>
				<FacebookShareButton
					url={url}
					quote={texts.join(' ') + "\n\n" + `Узнай, какие кыргызские партии солидарны с моей и с твоей позицией:`}
				>
					<div>
						<FacebookIcon
							style={{borderRadius: "50%"}}
							size={"2.1rem"}
						/>
					</div>
				</FacebookShareButton>
			</Grid>
			<Grid item>
				<TwitterShareButton
					url={url}
					title={`Пройди политический компас`}
					caption={`Узнай, какие кыргызские партии солидарны с моей и с твоей позицией:`}
				>
					<div>
						<TwitterIcon
							style={{borderRadius: "50%"}}
							size={"2.1rem"}
						/>
					</div>
				</TwitterShareButton>
			</Grid>
			<Grid item>
				<VKShareButton
					url={url}
					title={`Узнай, какие кыргызские партии солидарны с моей и с твоей позицией:`}
				>
					<div>
						<VKIcon
							style={{borderRadius: "50%"}}
							size={"2.1rem"}
						/>
					</div>
				</VKShareButton>
			</Grid>
		</Grid>
	)
}

export default ShareBtn;
