import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const IdDisplayChip = ({ chipData, setChipData, formData, dataSaved }) => {
  const classes = useStyles();

  const handleDelete = (data) => {
    const upChipData = chipData.filter(({ path }) => path !== data.path);
    setChipData(() => [...upChipData]);
  };


  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {

         return (
            <li key={data.path}>
              <Chip
                label={data.path}
                onDelete={() => handleDelete(data)}
                className={classes.chip}
                variant="outlined"
                color="primary"
              />
            </li>
        );

        // let url=''
        // if(dataSaved){
        //   url = formData.attachments[data.path.split('.')[0]]
        // }

        // return (
        //   <a href={url} target="_blank" rel="noreferrer">
        //     <li key={data.path}>
        //       <Chip
        //         label={data.path}
        //         onDelete={() => handleDelete(data)}
        //         className={classes.chip}
        //         variant="outlined"
        //         color="primary"
        //       />
        //     </li>
        //   </a>
        // );
      })}
    </Paper>
  );
};

export default IdDisplayChip;
