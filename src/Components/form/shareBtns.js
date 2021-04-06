import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
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

	const classes = makeStyles()

	return (
		<Grid container direction="row"
  justify="space-between"
  alignItems="center">
			<Grid item>
				<FacebookShareButton
					url={`https://google.com`}
					quote={`Узнай, какие кыргызские партии солидарны с моей и с твоей позицией:`}
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
				<div></div>
				<TwitterShareButton
					url={`https://google.com`}
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
					url={`https://google.com`}
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
