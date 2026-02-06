

import { useEffect, useState } from "react";

function ContentLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {loading ? (
        <p>Loading content...</p>
      ) : (
        <h3>🎉 Content Loaded Successfully!</h3>
      )}
    </div>
  );
}

export default ContentLoader;
