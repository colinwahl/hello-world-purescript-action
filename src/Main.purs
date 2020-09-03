module Main where

import Prelude

import Control.Monad.Except (runExceptT)
import Data.Either (Either(..))
import Data.Maybe (Maybe(..))
import Effect (Effect)
import Effect.Class (liftEffect)
import Effect.Exception (message)
import GitHub.Actions.Core as Core

main :: Effect Unit
main = do
  result <- runExceptT do
    name <- Core.getInput { name: "who-to-greet", options: Just { required: true } }
    liftEffect $ Core.info $ "Hello, " <> name <> "!"
  case result of
    Right _ -> mempty
    Left err -> do
      Core.setFailed $ message err
