import React, { useEffect, useState } from "react";
import { getTabla } from "../components/api";

const Tabla = () => {
  const [tabla, setTabla] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTabla()
      .then((data) => {
        setTabla(data);
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
            Estadisticas
          </h1>
        </div>

        <div className="flex flex-col text-center w-full mb-10">
          <h4 className="sm:text-2xl text-1xl font-medium title-font mb-2 text-gray-900">
            Tablas de posiciones
          </h4>
        </div>
        <div className="lg:w-250 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  #
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Equipos
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  PJ
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  G
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  E
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  P
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  GF
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  GC
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  DIF
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  PTS
                </th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {tabla.entries.map((e, idx) => {
                const teamName = e.team.displayName;
                const logo = e.team.logos[0]?.href;
                const stats = Object.fromEntries(
                  e.stats.map((s) => [s.name, s.displayValue])
                );

                return (
                  <tr key={idx}>
                    <td className="px-4 py-3">{idx + 1}</td>
                    <td className="flex items-center space-x-2 px-4 py-3">
                      <img
                        className="w-5 h-5 object-contain"
                        src={logo}
                        alt={teamName}
                        width={15}
                      />

                      <span className=" font-semibold ">{teamName}</span>
                    </td>
                    <td className="px-4 py-3">{stats.gamesPlayed}</td>

                    <td className="px-4 py-3">{stats.wins}</td>
                    <td className="px-4 py-3">{stats.ties}</td>

                    <td className="px-4 py-3">{stats.losses}</td>

                    <td className="px-4 py-3">{stats.pointsFor}</td>

                    <td className="px-4 py-3">{stats.pointsAgainst}</td>

                    <td className="px-4 py-3">{stats.pointDifferential}</td>

                    <td className="px-4 py-3">{stats.points}</td>
                  </tr>
                );
              })}
            </tbody>
            {/* <tbody>
              <tr>
                <td className="px-4 py-3">Start</td>
                <td className="px-4 py-3">5 Mb/s</td>
                <td className="px-4 py-3">15 GB</td>
                <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                <td className="w-10 text-center">
                  <input name="plan" type="radio" />
                </td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  25 Mb/s
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $24
                </td>
                <td className="border-t-2 border-gray-200 w-10 text-center">
                  <input name="plan" type="radio" />
                </td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  Business
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  36 Mb/s
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $50
                </td>
                <td className="border-t-2 border-gray-200 w-10 text-center">
                  <input name="plan" type="radio" />
                </td>
              </tr>
              <tr>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  Exclusive
                </td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  48 Mb/s
                </td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  120 GB
                </td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $72
                </td>
                <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                  <input name="plan" type="radio" />
                </td>
              </tr>
            </tbody> */}
          </table>
        </div>
      </div>
    </section>
  );
};

export default Tabla;
