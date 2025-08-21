import "./PokemonViewer.css";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";

export const PokemonViewer = () => {
	const [pokemonId, setPokemonId] = useState(0);
	const [imgLoading, setImgLoading] = useState(true);
	const url = pokemonId ? `https://pokeapi.co/api/v2/pokemon/${pokemonId}` : null;
	const { data, loading, error } = useFetch(url);

	const handlePokemon = (e) => {
		const value = Number(e.target.value);
		setPokemonId(value);

		if (value === "" || value === 0) {
			setPokemonId(0);
			return;
		}
	};

	useEffect(() => {
		if (pokemonId) {
			setImgLoading(true);
		}
	}, [pokemonId]);

	return (
		<div className={pokemonId ? "pokemon-fetch" : ""}>
			<label className="pokemon-input">
				Select your Pokemon:
				<input
					type="number"
					value={pokemonId || ""}
					autoComplete="off"
					placeholder="Enter a Pokemon ID"
					onChange={handlePokemon}
				/>
			</label>

			{(loading || (imgLoading && data)) && <div className="loading-spinner"></div>}
			{error && !loading && <p style={{ color: "red" }}>{error}</p>}

			{data && data.sprites && !loading && (
				<div className="pokemon-card">
					<img src={data.sprites.front_default} alt={data.name} onLoad={() => setImgLoading(false)} />

					<h3>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
					<div className="pokemon-stats">
						{data.stats.map(({ stat, base_stat }) => (
							<p key={stat.name}>
								{stat.name}: {base_stat}
							</p>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
