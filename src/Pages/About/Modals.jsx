import React from "react";
import { Modal } from "antd";
import { Button3 } from "../../Components/ResponsiveConts";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Olabode from "../../Assets/images/Olabode.jpg";
import Adeyemi from "../../Assets/images/Adeyemi.png";
import Adeyinka from "../../Assets/images/Adeyinka.png";
import Dolapo from "../../Assets/images/Dolapo.png";

export const Modal1 = ({ visible, setVisible }) => {
  return (
    <Modal
      title=""
      centered
      visible={visible}
      footer={null}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
    >
      <div className="member_modal">
        <div>
          <LazyLoadImage src={Adeyemi} alt="team" effect="blur" />
        </div>
        <div>
          <h3>Dr. Tayo Adiatu Adeyemi</h3>
          <p>
            Dr. Adiatu is an astute businessman with over twenty years of wealth of experience. He holds a Bachelors degree in Pure and Applied Chemistry, an MBA degree and an honorary Doctorate degree in Business Administration from Ladoke Akintola University of Technology, Oyo State Nigeria. He is a member of the Institute of Directors (loD) and other professional bodies.

He bags an Executive MBA degree from the Metropolitan School of BusinessManagement (MSBM), London, UK. In 2019, he concluded the Owner/President Management (OPM) programme at the Havard Business School in Boston, USA. He is an expert in people management, conflict resolution, strategic negotiations and corporate administration.
          </p>
          <Button3 id="member_close" onClick={() => setVisible(false)}>
            Close
          </Button3>
        </div>
      </div>
    </Modal>
  );
};

export const Modal2 = ({ visible, setVisible }) => {
  return (
    <Modal
      title=""
      centered
      visible={visible}
      footer={null}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
    >
      <div className="member_modal">
        <div>
          <LazyLoadImage src={Olabode} alt="team" effect="blur" />
        </div>
        <div>
          <h3>Bode Gbolade</h3>
          <p>
            He is an astute professional with over twenty-three (23) years cognate experience 
            in the built environment. He holds a B-Tech and M-Tech in Architecture from the 
            Federal Univeristy of Technology, Akure, Ondo State, Nigeria. He is a fellow of 
            the Nigeria Institute of Architects (NIA) and a member of Architects Registration 
            Council of Nigeria (ARCON). Bode is an International associate of American Institute 
            of Architects (AIA) and also a fellow of the International professional Managers 
            Association, Uk. He is an astute human resource manager, with focus on optimization, 
            corporate transformation and corporate management.
          </p>
          <Button3 id="member_close" onClick={() => setVisible(false)}>
            Close
          </Button3>
        </div>
      </div>
    </Modal>
  );
};

export const Modal3 = ({ visible, setVisible }) => {
  return (
    <Modal
      title=""
      centered
      visible={visible}
      footer={null}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
    >
      <div className="member_modal">
        <div>
          <LazyLoadImage src={Dolapo} alt="team" effect="blur" />
        </div>
        <div>
          <h3>Dolapo Akinwale</h3>
          <p>
            Mr Akinwale holds a First Class Honors Bachelors degree in Computer
            Engineering from Convenant Univeristy, Nigeria. He further obtained
            a Masters Degree in Human Resource (Service) Management- University
            of Buckingham, United Kingdom. He is a member of the International
            Institute of Business Analysis, (IIBA). He worked in Onet
            Telecommunications located in Oyo State and Airtel Nigeria. He has
            experience in Human Resource Management, Service Marketing. and
            Organisational Strategy.
          </p>
          <Button3 id="member_close" onClick={() => setVisible(false)}>
            Close
          </Button3>
        </div>
      </div>
    </Modal>
  );
};

export const Modal4 = ({ visible, setVisible }) => {
  return (
    <Modal
      title=""
      centered
      visible={visible}
      footer={null}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
    >
      <div className="member_modal">
        <div>
          <LazyLoadImage src={Adeyinka} alt="team" effect="blur" />
        </div>
        <div>
          <h3>Olaleye Adeyinka</h3>
          <p>
            Mr Adeyinka is a thoroughbred and result oriented finance
            professional with broad experience in all areas of finance,
            accounting, business development, procurement and general
            management. He has garnered over 17years’ work experience, out of
            which more than eight (8) was with KPMG. He is a registered
            professional with the financial Reporting Council of Nigeria.{" "}
          </p>
          <Button3 id="member_close" onClick={() => setVisible(false)}>
            Close
          </Button3>
        </div>
      </div>
    </Modal>
  );
};
