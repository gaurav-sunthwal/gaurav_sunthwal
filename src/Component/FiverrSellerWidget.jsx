import React, { useEffect } from "react";

const FiverrSellerWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id =
      "fiverr-seller-widget-script-a2870f98-aff7-4310-9e0b-a333e1c3390e";
    script.src =
      "https://widgets.fiverr.com/api/v1/seller/gauravsunthwal?widget_id=a2870f98-aff7-4310-9e0b-a333e1c3390e";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="card">
      <div
        itemscope
        itemtype="http://schema.org/Person"
        className="fiverr-seller-widget"
        style={{ display: "inline-block" }}
      >
        <a
          itemprop="url"
          href="https://www.fiverr.com/gauravsunthwal"
          rel="nofollow"
          target="_blank"
          style={{ display: "inline-block" }}
        >
          <div
            className="fiverr-seller-content"
            id="fiverr-seller-widget-content-a2870f98-aff7-4310-9e0b-a333e1c3390e"
            itemprop="contentURL"
            style={{ display: "none" }}
          ></div>
          <div id="fiverr-widget-seller-data" style={{ display: "none" }}>
            <div itemprop="name">gauravsunthwal</div>
            <div itemscope itemtype="http://schema.org/Organization">
              <span itemprop="name">Fiverr</span>
            </div>
            <div itemprop="jobtitle">Seller</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FiverrSellerWidget;
