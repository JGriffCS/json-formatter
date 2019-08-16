import React, { useCallback, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "buffetjs";
import Peer from "peerjs";
import shortid from "shortid";

const ByLink = ({ value }) => {
  const [link, setLink] = useState("");

  const shareLink = useCallback(() => {
    const id = shortid.generate();
    const peer = new Peer(id);
    peer.on("connection", (conn) => {
      conn.send(value);
    });
    setLink(`${window.location.href}?q=${shortid}`)
  }, [value]);
  return (
    <Fragment>
      <Button color="primary" icon={false} label={"Share URL"} onClick={shareLink} />
      { !!link && (
        <p>{link}</p>
      )}
    </Fragment>
  );
}

ByLink.defaultProps = {
  value: "",
}

ByLink.propTypes = {
  value: PropTypes.string,
  complete: PropTypes.func.isRequired,
}

export default ByLink;