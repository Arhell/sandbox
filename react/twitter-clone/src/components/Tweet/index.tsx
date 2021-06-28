
import {Avatar, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import PlayForWorkOutlinedIcon from "@material-ui/icons/PlayForWorkOutlined";
import {useHomeStyles} from "../../pages/Home";

interface TweetProps {
  text: String
  classes: ReturnType<typeof useHomeStyles>
  user: {
    fullName: String
    userName: String
    avatarUrl: String
  }
}

export const Tweet: React.FC<TweetProps> = ({text, user, classes}: TweetProps): React.ReactElement => {
  return (
    <Paper className={classes.tweetsWrapper} variant="outlined">
      <Paper className={classes.tweetsHeader} variant="outlined">
        <Typography variant="h6">123</Typography>
      </Paper>

      <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
        <Grid container spacing={3}>
          <Grid item xs={1}>
            {/* @ts-ignore */}
            <Avatar classes={classes.tweetAvatar} alt={`Avatar ${user.userName}`} src={user.avatarUrl} />
          </Grid>
          <Grid item xs={11}>
            <Typography>
              <strong>{user.fullName}</strong>
              <span className={classes.tweetsUserName}>&nbsp;@{user.userName}</span>
              <span className={classes.tweetsUserName}>&nbsp;.&nbsp;</span>
              <span className={classes.tweetsUserName}>1 h</span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {text}
            </Typography>
            <div className={classes.tweetFooter}>
              <div>
                <IconButton color="primary">
                  <ChatBubbleOutlineOutlinedIcon className={classes.tweetFooterIcon} />
                </IconButton>
                <span>1</span>
              </div>
              <div>
                <IconButton color="primary">
                  <FavoriteBorderOutlinedIcon className={classes.tweetFooterIcon} />
                </IconButton>
              </div>
              <div>
                <IconButton color="primary">
                  <RepeatOutlinedIcon className={classes.tweetFooterIcon} />
                </IconButton>
              </div>
              <div>
                <IconButton color="primary">
                  <PlayForWorkOutlinedIcon className={classes.tweetFooterIcon} />
                </IconButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  )
}