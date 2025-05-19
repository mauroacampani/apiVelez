import React, { useEffect, useState } from "react";
import { getResultados } from "../components/api";

const Resultados = () => {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getResultados()
      .then((data) => {
        setResultados(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener la tabla:", err);
        setError("No se pudieron cargar los datos");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center"></p>;

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Resultados
          </h1>
        </div>

        <div className="lg:w-200 w-full mx-auto overflow-auto">
          <table className="table-auto w-full font-semibold  whitespace-no-wrap ">
            <tbody className="text-sm">
              {resultados.map((e, idx) =>
                e.competitions.map((comp, i) => {
                  const estadio = comp.venue;

                  const date = new Date(comp.date);

                  const day = String(date.getUTCDate()).padStart(2, "0");
                  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
                  const year = date.getUTCFullYear();

                  const hours = String(date.getUTCHours()).padStart(2, "0");
                  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

                  const formatted = `${day}-${month}-${year} ${hours}:${minutes}`;

                  const team1 = comp.competitors[0];
                  const team2 = comp.competitors[1];

                  return (
                    <>
                      <tr
                        className=" text-center bg-blue-50"
                        key={`${idx}-${i}`}
                      >
                        <td className="px-4 py-3 ">
                          {formatted} - {estadio.fullName}
                        </td>
                      </tr>
                      <tr className="flex bg-blue-300">
                        <td
                          className=" flex justify-end px-4 py-3 bg-blue-200 space-x-2"
                          style={{ width: "40%" }}
                        >
                          <img
                            className="w-5 h-5"
                            src={team1.team.logos[0]?.href}
                            alt={team1.team.displayName}
                            width={15}
                          />
                          <span className="  ">{team1.team.displayName}</span>
                        </td>

                        <td
                          className="text-center space-x-2 px-4 py-3"
                          style={{ width: "20%" }}
                        >
                          {team1.score.value} - {team2.score.value}
                        </td>

                        <td
                          className="flex space-x-2 px-4 py-3 bg-blue-200"
                          style={{ width: "40%" }}
                        >
                          <span className="  ">{team2.team.displayName}</span>
                          <img
                            className="w-5 h-5 object-contain"
                            src={team2.team.logos[0]?.href}
                            alt={team2.team.displayName}
                            width={15}
                          />{" "}
                        </td>
                      </tr>
                    </>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default Resultados;
