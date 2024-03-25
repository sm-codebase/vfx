import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyAuwt2OGN57-n7FoD4aRP_orDI5XAS02t8",
  version: "weekly",
  libraries: ["places"],
});

const containerStyle = {
  width: "70vh",
  height: "55vh",
};

const center = {
  lat: -22.330411183836983,
  lng: -46.93239987977187,
};

function SimpleMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAuwt2OGN57-n7FoD4aRP_orDI5XAS02t8",
  });

  const [map, setMap] = React.useState(null);

  return isLoaded ? (
    <div id="localizacao" className="mt-20 ">
      <div className="rounded-lg md:grid grid-cols-2 justify-items-center">
        <div className="md:w-1/2 leading-7 mx-5">
          <h3>VFX METAL MECÂNICA</h3>
          <p className="my-3">
            Visando incorporar novas soluções para atendimento ás demandas da
            indústria, a VFX fundou em 2008 uma unidade especifica para
            caldeiraria, fabricação de spools, estruturas metálicas e
            equipamentos.
          </p>{" "}
          <p className="mb-5">
            {" "}
            A <b>VFX METAL MECÂNICA</b> está localizada estrategicamente no
            município de Mogi Guaçu no estado de São Paulo, possui uma área
            ampla e estrutura adequada para acomodar equipamentos modernos e
            profissionais qualificados que utilizam as melhores praticas do
            mercado, atendendo clientes em todas as localidades com eficiência,
            qualidade e segurança.
          </p>
        </div>

        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} >
          <Marker position={center} />
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default React.memo(SimpleMap);
